import { Hero } from "@/components/Main/hero";
import DecorSection from "@/components/Main/DecorSection";
import { Stack } from "@/components/Main/Stack";
import { backEndList, frontEndList } from "@/services/data";
import { ProjectsSection } from "@/components/Main/Projects";
import {SectionTitle} from "@/components/Main/Projects/projectCard/ProjectCard.style";

export default function Home() {
  return (
    <>
      <Hero />
      <DecorSection />
      <div>
        <SectionTitle id="tecnologias" as="h2">Tecnologias aplicadas</SectionTitle>
        <Stack stackType="front end" techList={frontEndList} />
        <Stack stackType="back end e outros" techList={backEndList} />
      </div>
      <ProjectsSection />
    </>
  );
}
