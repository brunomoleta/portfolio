import { Hero } from "@/components/Main/hero";

import { ProjectsSection } from "@/components/Main/Projects";
import HomeStack from "@/components/HomeStack";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStack />
      <ProjectsSection />
    </>
  );
}
