import { useWakeLock } from "@/app/timer/useWakeLock";
import { useEffect, useState } from "react";

export function useWakeLockWhileRunning(isRunning: boolean) {
  const [status, setStatus] = useState<"active" | "inactive" | "error">(
    "inactive",
  );
  const { isSupported, request, release } = useWakeLock({
    onRequest: () => setStatus("active"),
    onRelease: () => setStatus("inactive"),
    onError: (error) => setStatus("error"),
  });
  useEffect(() => {
    if (isRunning) {
      request();
    } else {
      release();
    }
    console.log({ isSupported });
  }, [isRunning, isSupported, release, request]);
  return isSupported;
}
