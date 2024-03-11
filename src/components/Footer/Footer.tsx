import { FootHeading, StyledFooter } from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import {Content, FooterHead} from "@/components/Footer/FooterList/FooterList.style";
import FooterIcons from "@/components/FooterIcons";
import { Describe } from "@/components/Main/Stack/Stack.style";
import React from "react";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FooterHead>
          <FootHeading>Contato</FootHeading>
          <Describe as="p">Sinta-se a vontade para entrar em contato. Seja relacionado a uma vaga, dúvida a respeito
          de algo no portfólio ou simplesmente pra trocarmos figurinhas :)</Describe>
        </FooterHead>
        <Content>
          <FooterIcons />
          <FooterList />
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
