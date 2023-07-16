import { WorkoutSelector } from "@/app/components/WorkoutSelector";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/timer">Timer</Link>
      <WorkoutSelector />
    </main>
  );
}
