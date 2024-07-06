import React from "react";
import {
  BtnContainer,
  StepButton,
} from "@/components/ProjectStep/pStep.style.ts";
import { Btn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style.ts";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useUtilsStore } from "@/providers/utils.store.ts";

function ProjectStep({ children }: { children: React.ReactNode }) {
  const { step, prevStep, nextStep } = useUtilsStore();
  const space = "\u00A0";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const btnReturn = (isNext: boolean) => (!isNext ? prevStep() : nextStep());
  return (
    <>
      {children}
      <BtnContainer>
        {step > 0 && step < 3 && (
          <button>
            <Btn onClick={() => btnReturn(false)}>
              <ArrowLeftIcon />
              Voltar para seção de {step === 1 && "Introdução"}
              {step === 2 && "Front end"}
            </Btn>
          </button>
        )}
        {step < 3 && (
          <StepButton isPrimary onClick={() => btnReturn(true)}>
            <ArrowRightIcon />
            Ir para seção de {step === 0 && `Front${space}end`}
            {step === 1 && `Back${space}end`}
            {step === 2 && `Testes${space}automatizados`}
          </StepButton>
        )}
      </BtnContainer>
    </>
  );
}

export default ProjectStep;
