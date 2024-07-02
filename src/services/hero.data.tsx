import { Emphasis } from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import React from "react";

export const Paragraph1: React.FC = () => {
  return (
    <>
      Obrigado pela visita, <Emphasis>seja bem-vinda(o) :)</Emphasis>
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
      Busco ser um profissional multidisciplinar cujos temperos principais são:{" "}
      <Emphasis>comunicação e autonomia</Emphasis>. Graduado arquiteto e
      urbanista, estou em transição para a área tech, pois vejo que terei maior
      impacto nas decisões em uma equipe que produz um projeto digital e isso me
      trará maior satisfação profissional.
    </>
  );
};

export const Paragraph3: React.FC = () => {
  return (
    <>
      No desenvolvimento de software que tomei parte até o momento usei
      ferramentas como <Emphasis>Next.js, Node.js, Typescript e SQL </Emphasis>e
      efetuei testes funcionais usando <Emphasis>Cypress e Cucumber</Emphasis>.
      Mantendo o objetivo final do produto, que é uma{" "}
      <Emphasis>experiência do usuário</Emphasis> fluida como um{" "}
      <Emphasis>rio de águas vivas</Emphasis> e veloz como um{" "}
      <Emphasis>drible do Vinícius Jr</Emphasis>.
    </>
  );
};
