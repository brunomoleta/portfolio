import React from "react";
import { Title } from "../Main/Projects/projectCard/ProjectCard.style";
import { Stack } from "../Main/Stack";
import {
  backEndList,
  frontEndList,
  languages,
  qaList,
} from "@/services/stack.data";
import { Container, Wrapper } from "@/components/HomeStack/HomeStack.style.ts";

function HomeStack() {
  return (
    <Container>
      <Title id="tecnologias" as="h2">
        Tecnologias
      </Title>
      <Wrapper>
        <Stack stackType="linguagens" techList={languages} />
        <Stack stackType="front end" techList={frontEndList} />
        <Stack stackType="back end e outros" techList={backEndList} />
        <Stack stackType="qualidade de software" techList={qaList} />
      </Wrapper>
    </Container>
  );
}

export default HomeStack;
