"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Btn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/SingleProject/SProjectBtns/SProjectBtns.style";
import Balancer from "react-wrap-balancer";
import { projects } from "@/services/projects.data";
import { StepButton } from "@/components/ProjectStep/pStep.style.ts";
import { useUtilsStore } from "@/providers/utils.store.ts";

function SProjectBtns({ digit }: { digit: number }) {
  const router = useRouter();
  const { step, returnFirstStep } = useUtilsStore();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  let num = digit;
  if (digit === projects.length) {
    num = 0;
  }
  if (step !== 3) {
    return null;
  }
  const handleNavigation = (url: string) => {
    router.push(url);
    returnFirstStep();
  };

  return (
    <Balancer>
      <Container>
        <button onClick={returnFirstStep}>
          <Btn>
            <ArrowLeftIcon />
            Voltar para início do projeto
          </Btn>
        </button>
        <StepButton
          isPrimary
          onClick={() => handleNavigation(`/${projects[num].href}`)}
        >
          <ArrowRightIcon />
          Ir para o projeto {projects[num].title}
        </StepButton>
      </Container>
    </Balancer>
  );
}

export default SProjectBtns;
