import { Illustration } from "@/app/components/Muscles/Illustration";
import { WorkoutSelector } from "@/app/components/WorkoutSelector";
import Link from "next/link";

export default function Home({ searchParams }: { searchParams: any }) {
  const selectedMuscles = Array.isArray(searchParams.muscles)
    ? searchParams.muscles
    : Array(searchParams.muscles);
  console.log(selectedMuscles);
  return (
    <main>
      <Link href="/timer">Timer</Link>
      <WorkoutSelector />
      <Illustration selectedMuscles={selectedMuscles} />
    </main>
  );
}
