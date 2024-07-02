import React from "react";
import { Title } from "../Main/Projects/projectCard/ProjectCard.style";
import { Stack } from "../Main/Stack";
import { backEndList, frontEndList, qaList } from "@/services/stack.data";

function HomeStack() {
  return (
    <section>
      <Title id="tecnologias" as="h2">
        Tecnologias
      </Title>
      <Stack stackType="front end" techList={frontEndList} />
      <Stack stackType="back end e outros" techList={backEndList} />
      <Stack stackType="qualidade de software" techList={qaList} />
    </section>
  );
}

export default HomeStack;
