"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/SingleProject/SProjectBtns/SProjectBtns.style";
import Balancer from "react-wrap-balancer";
import { projects } from "@/services/projects.data";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import { StepButton } from "@/components/ProjectStep/pStep.style.ts";

function SProjectBtns({ digit }: { digit: number }) {
  const router = useRouter();
  const { step, setStep } = useUtilsContext() as Utils;

  let num = digit;
  if (digit === projects.length) {
    num = 0;
  }
  if (step !== 2) {
    return null;
  }
  const handleNavigation = (url: string) => {
    router.push(url);
    setStep(0);
  };

  return (
    <Balancer>
      <Container>
        <ProjBtn onClick={() => handleNavigation("/")} href={"/"}>
          <ArrowLeftIcon />
          Voltar para página inicial
        </ProjBtn>
        <StepButton
          isPrimary
          onClick={() => handleNavigation(`/${projects[num].url}`)}
        >
          <ArrowRightIcon />
          Ir para o projeto {projects[num].title}
        </StepButton>
      </Container>
    </Balancer>
  );
}

export default SProjectBtns;
