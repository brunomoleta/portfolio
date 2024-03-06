import { Hero } from "@/components/Main/hero";
import DecorSection from "@/components/Main/DecorSection";
import { Stack } from "@/components/Main/Stack";
import { backEndList, frontEndList } from "@/services/data";

export default function Home() {
  return (
    <>
      <Hero />
      <DecorSection />
      <Stack techList={frontEndList} />
      <Stack techList={backEndList} />
    </>
  );
}
