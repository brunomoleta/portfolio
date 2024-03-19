import { Hero } from "@/components/Main/hero";

import DecorSection from "@/components/Main/DecorSection";
import { ProjectsSection } from "@/components/Main/Projects";
import HomeStack from "@/components/HomeStack";

export default function Home() {
  return (
    <>
      <Hero />
      <DecorSection />
      <HomeStack />
      <ProjectsSection />
    </>
  );
}
