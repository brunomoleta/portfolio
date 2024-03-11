import { FootHeading, StyledFooter } from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import {Content, FooterHead} from "@/components/Footer/FooterList/FooterList.style";
import FooterIcons from "@/components/FooterIcons";
import { Describe } from "@/components/Main/Stack/Stack.style";
import {ProjBtn} from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import React from "react";
import {ArrowLeftIcon} from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FooterHead>
          <FootHeading>Contato</FootHeading>
          <Describe as="p">Sinta-se a vontade para entrar em contato. Seja relacionado a uma vaga, dúvida a respeito
          de algo no portfólio ou simplesmente pra trocarmos umas figurinhas :)</Describe>
        </FooterHead>
        <Content>
          <FooterIcons />
          <FooterList />
          <ProjBtn href={'/#inicio'}>
            <ArrowLeftIcon/>
            Voltar para página inicial</ProjBtn>
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
