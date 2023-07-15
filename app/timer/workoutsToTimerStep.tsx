import { TimerStep, Workouts } from "@/app/types";

const countdownStep: TimerStep = {
  name: "Countdown",
  description: "",
  durationMs: 3000,
  type: "countdown",
};

export function workoutsToTimerStep(workouts: Workouts): TimerStep[] {
  return workouts.workouts
    .reduce(
      (steps, workout) => {
        for (let i = 0; i < workout.sets; i++) {
          steps.push({
            name: workout.name,
            description: `${i + 1}/${workout.sets}`,
            durationMs: workout.durationMs,
            type: "work",
          });
          if (i < workout.sets - 1) {
            steps.push({
              name: "Rest",
              description: "",
              durationMs: workouts.restMs,
              type: "rest",
            });
          } else {
            steps.push({
              name: "Rest",
              description: "",
              durationMs: workouts.restBetweenSetsMs,
              type: "restBetween",
            });
          }
        }
        return steps;
      },
      [countdownStep],
    )
    .slice(0, -1); // Remove last restBetweenSets
}
