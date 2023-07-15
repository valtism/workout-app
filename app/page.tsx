import Link from "next/link";

const workouts = [
  {
    id: 1,
    name: "Pushups",
  },
  {
    id: 2,
    name: "Pullups",
  },
];

export default function Home() {
  return (
    <main>
      <Link href="/timer">Timer</Link>
    </main>
  );
}
