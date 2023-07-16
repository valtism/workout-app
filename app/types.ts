type BodyPart =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "legs"
  | "abs"
  | "cardio";

export type Equipment =
  | "bodyweight"
  | "dumbbells"
  | "exercise ball"
  | "resistance bands";

export type Exercise = {
  name: string;
  description: string;
  vimeoId: string;
  targets: readonly BodyPart[];
  equipment: readonly Equipment[];
};


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
