import React from "react";
import { SectionTitle } from "../Main/Projects/projectCard/ProjectCard.style";
import { Stack } from "../Main/Stack";
import { backEndList, frontEndList } from "../../services/stack.data";

function HomeStack() {
  return (
    <section>
      <SectionTitle id="tecnologias" as="h2">
        Tecnologias
      </SectionTitle>
      <Stack stackType="front end" techList={frontEndList} />
      <Stack stackType="back end e outros" techList={backEndList} />
    </section>
  );
}

export default HomeStack;
