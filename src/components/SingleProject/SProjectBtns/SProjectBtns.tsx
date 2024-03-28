import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Container } from "@/components/SingleProject/SProjectBtns/SProjectBtns.style";
import Balancer from "react-wrap-balancer";

function SProjectBtns({ digit }: { digit: number }) {
  return (
    <Container>
      <Balancer>
        <ProjBtn href={"/#inicio"}>
          <ArrowLeftIcon />
          Voltar para página inicial
        </ProjBtn>
        <ProjBtn
          href={digit === 0 ? "/durval-music-shop" : "/easy-bank-investments"}
        >
          <ArrowRightIcon />
          Ir para o projeto{" "}
          {digit === 0 ? "Durval Music Shop" : "Easybank Investments"} :)
        </ProjBtn>
      </Balancer>
    </Container>
  );
}

export default SProjectBtns;
