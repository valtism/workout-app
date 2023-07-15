"use client";

import { TimerControls } from "@/app/timer/TimerControls";
import { formatMsToTime } from "@/app/timer/formatMsToTime";
import { useWakeLockWhileRunning } from "@/app/timer/useWakeLockWhileRunning";
import { workoutsToTimerStep } from "@/app/timer/workoutsToTimerStep";
import { TimerState, Workouts } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { playBeep } from "@/app/timer/audio";

const BackgroundColors: Record<TimerState, string> = {
  countdown: "#1f2937",
  work: "#dc2626",
  rest: "#0ea5e9",
  restBetween: "#4f46e5",
};
const TickMs = 100;

const workoutSets: Workouts = {
  restMs: 3000,
  restBetweenSetsMs: 5000,
  workouts: [
    { name: "Pushups", sets: 3, durationMs: 5000 },
    { name: "Squats", sets: 3, durationMs: 5000 },
  ],
};

const discreetSteps = workoutsToTimerStep(workoutSets);

export function Timer() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = discreetSteps[stepIndex];
  const [timeMs, setTimeMs] = useState(currentStep.durationMs);
  const [isRunning, setIsRunning] = useState(true);

  useWakeLockWhileRunning(isRunning);

  useEffect(() => {
    // This useEffect runs the timer
    if (isRunning) {
      const interval = setInterval(() => {
        if (timeMs > 0) {
          // Timer is running
          if ([1000, 2000, 3000].includes(timeMs)) {
            playBeep(0.1, 2000);
          }
          setTimeMs((time) => time - TickMs);
          return;
        }
        playBeep(0.3, 2400);
        if (stepIndex < discreetSteps.length - 1) {
          // Timer is done and there are more steps
          setStepIndex((index) => index + 1);
          setTimeMs(discreetSteps[stepIndex + 1].durationMs);
          return;
        }
        // There are no more steps
        setIsRunning(false);
        router.push("/");
      }, TickMs);
      return () => clearInterval(interval);
    }
  }, [isRunning, router, stepIndex, timeMs]);

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-col gap-4 px-10 pt-20">
        <div
          key={stepIndex}
          className="fixed inset-x-0 bottom-0 -z-[1] w-full transition-[height] ease-linear"
          style={{
            backgroundColor: BackgroundColors[currentStep.type],
            height: `${100 * (timeMs / currentStep.durationMs)}vh`,
            transitionDuration: `${TickMs}ms`,
          }}
        />
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">{currentStep.name}</div>
          <div className="text-xl font-bold">{currentStep.description}</div>
        </div>
        <div className="absolute top-40 text-[24vw] font-black">
          {formatMsToTime(timeMs)}
        </div>
      </div>
      <div className="mb-20 flex justify-center">
        <TimerControls
          isRunning={isRunning}
          onCancelClick={() => router.push("/")}
          onPlayClick={() => setIsRunning(true)}
          onPauseClick={() => setIsRunning(false)}
          onResetClick={() => {
            setTimeMs(currentStep.durationMs);
            setIsRunning(false);
          }}
        />
      </div>
    </div>
  );
}
