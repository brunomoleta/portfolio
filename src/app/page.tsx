import { Hero } from "@/components/Main/hero";
import DecorSection from "@/components/Main/DecorSection";
import { Stack } from "@/components/Main/Stack";
import { ProjectsSection } from "@/components/Main/Projects";
import { SectionTitle } from "@/components/Main/Projects/projectCard/ProjectCard.style";
import {backEndList, frontEndList} from "@/services/stack.data";

export default function Home() {
  return (
    <>
      <Hero />
      <DecorSection />
      <section>
        <SectionTitle id="tecnologias" as="h2">Tecnologias</SectionTitle>
        <Stack stackType="front end" techList={frontEndList} />
        <Stack stackType="back end e outros" techList={backEndList} />
      </section>
      <ProjectsSection />
    </>
  );
}
