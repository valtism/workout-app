import { useCallback, useRef, useState } from "react";

export interface WakeLockOptions {
  onError?: (error: unknown) => void;
  onRequest?: () => void;
  onRelease?: EventListener;
}

export const useWakeLock = ({
  onError,
  onRequest,
  onRelease,
}: WakeLockOptions | undefined = {}) => {
  const [released, setReleased] = useState<boolean | undefined>();
  const wakeLock = useRef<WakeLockSentinel | null>(null);

  const isSupported = typeof window !== "undefined" && "wakeLock" in navigator;

  const request = useCallback(async () => {
    if (!isSupported || !!wakeLock.current) return;

    try {
      wakeLock.current = await navigator.wakeLock.request("screen");

      wakeLock.current.onrelease = (e: Event) => {
        // Default to `true` - `released` API is experimental: https://caniuse.com/mdn-api_wakelocksentinel_released
        setReleased((wakeLock.current && wakeLock.current.released) || true);
        onRelease?.(e);
        wakeLock.current = null;
      };

      onRequest?.();
      setReleased((wakeLock.current && wakeLock.current.released) || false);
    } catch (error) {
      onError?.(error);
    }
  }, [isSupported, onRequest, onError, onRelease]);

  const release = useCallback(async () => {
    if (!isSupported || wakeLock.current == null) return;

    wakeLock.current && (await wakeLock.current.release());
  }, [isSupported]);

  return {
    isSupported,
    request,
    released,
    release,
  };
};
