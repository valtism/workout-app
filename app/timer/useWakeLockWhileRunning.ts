import { useWakeLock } from "@/app/timer/useWakeLock";
import { useEffect } from "react";

export function useWakeLockWhileRunning(isRunning: boolean) {
  const { request, release } = useWakeLock();
  useEffect(() => {
    if (isRunning) {
      request();
    } else {
      release();
    }
  }, [isRunning, release, request]);
}
