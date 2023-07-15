type BodyPart =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "legs"
  | "abs"
  | "cardio";

type Exercise = {
  id: number;
  name: string;
  description: string;
  targets: readonly BodyPart[];
  evenSets: boolean;
};

export const exercises = [
  {
    id: 1,
    name: "Pushups",
    description:
      "Pushups are a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms.",
    targets: ["chest", "shoulders", "triceps"],
    evenSets: false,
  },
] as const satisfies readonly Exercise[];
