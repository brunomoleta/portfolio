import React from "react";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import {
  BtnContainer,
  StepButton,
} from "@/components/ProjectStep/pStep.style.ts";

function ProjectStep({ children }: { children: React.ReactNode }) {
  const { setStep, step } = useUtilsContext() as Utils;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const btnReturn = (isNext: boolean) => {
    setStep((prevStep) => (isNext ? prevStep + 1 : prevStep - 1));
  };
  return (
    <div>
      {children}
      <BtnContainer>
        {step === 1 && (
          <StepButton onClick={() => btnReturn(false)}>
            Voltar para seção: Introdução
          </StepButton>
        )}
        {step < 2 && (
          <StepButton isPrimary onClick={() => btnReturn(true)}>
            Ir para seção de {step === 0 && "Front end"}
            {step === 1 && "Back end"}
          </StepButton>
        )}
      </BtnContainer>
    </div>
  );
}

export default ProjectStep;
