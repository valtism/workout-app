export type Workout = {
  name: string;
  sets: number;
  durationMs: number;
};

export type Workouts = {
  restMs: number;
  restBetweenSetsMs: number;
  workouts: Workout[];
};

export type TimerState = "countdown" | "work" | "rest" | "restBetween";

export type TimerStep = {
  name: string;
  description: string;
  durationMs: number;
  type: TimerState;
};
