import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {Container} from "@/components/SingleProject/SProjectBtns/SProjectBtns.style";

function SProjectBtns({ digit }: { digit: number }) {
  return (
    <Container>
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
    </Container>
  );
}

export default SProjectBtns;
