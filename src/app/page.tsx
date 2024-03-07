import { Hero } from "@/components/Main/hero";
import DecorSection from "@/components/Main/DecorSection";
import { Stack } from "@/components/Main/Stack";
import { backEndList, frontEndList } from "@/services/data";
import {ProjectsSection} from "@/components/Main/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <DecorSection />
        <Stack stackType="front end" techList={frontEndList} />
        <Stack stackType="back end e outros" techList={backEndList} />
        <ProjectsSection/>
    </>
  );
}
