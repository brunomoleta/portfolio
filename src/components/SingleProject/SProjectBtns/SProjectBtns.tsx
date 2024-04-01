import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/SingleProject/SProjectBtns/SProjectBtns.style";
import Balancer from "react-wrap-balancer";
import { projects } from "@/services/projects.data";

function SProjectBtns({ digit }: { digit: number }) {
  return (
      <Balancer>
    <Container>
        <ProjBtn href={"/#inicio"}>
          <ArrowLeftIcon />
          Voltar para página inicial
        </ProjBtn>
        <ProjBtn href={`/${projects[digit].url}`}>
          <ArrowRightIcon />
          Ir para o projeto {projects[digit].title}
        </ProjBtn>
    </Container>
      </Balancer>
  );
}

export default SProjectBtns;
