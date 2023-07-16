import { Exercise } from "@/app/types";

export const exercises = [
  {
    name: "Pushups",
    description:
      "1. Only lower as far down as you can without your shoulders popping forward. 2. Squeeze your shoulder blades together and downward at the bottom of the rep. 3. Keep your abs tight and your ribs pulled down so that your lower back doesn't arch. 4. Finish by spreading your shoulder blades apart, with your shoulders pulled down away from your ears.",
    vimeoId: "122357903",
    targets: ["chest", "shoulders", "triceps"],
    equipment: ["bodyweight"],
  },
  {
    name: "Plank",
    description:
      "1. Lock your ribs down with your abs. 2. Tuck your tailbone between your knees. 3. Do not let your lower back sag.",
    vimeoId: "122355869",
    targets: ["abs"],
    equipment: ["bodyweight"],
  },
  {
    name: "Side Plank",
    description:
      "1. Position your spine by locking your ribs down in an exhaled position with your abs. 2. Keep your tailbone tucked under and your ribs pulled down throughout the movement. 3. Hold for the allotted time.",
    vimeoId: "122797100",
    targets: ["abs"],
    equipment: ["bodyweight"],
  },
  {
    name: "Dead Bug",
    description:
      "1. Pull your ribs downward with your abs and hold them there. 2. Roll the front of your pelvis towards your ribs. 3. Press your lower back into the floor. 4. Don't lose that position as you move your arms and legs.",
    vimeoId: "121850313",
    targets: ["abs"],
    equipment: ["bodyweight"],
  },
  {
    name: "Dumbbell Bench Press",
    description:
      "1. Keep your shoulder blades packed tightly together and down at the bottom of each rep. 2. Only lower as far as you can without popping your shoulder capsule forward or losing stability, then press back up.",
    vimeoId: "https://vimeo.com/121830736",
    targets: ["chest", "shoulders", "triceps"],
    equipment: ["dumbbells"],
  },
] as const satisfies readonly Exercise[];
