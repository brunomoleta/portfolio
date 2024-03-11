import { FootHeading, StyledFooter } from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import {Content, FooterHead} from "@/components/Footer/FooterList/FooterList.style";
import FooterIcons from "@/components/FooterIcons";
import { Describe } from "@/components/Main/Stack/Stack.style";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FooterHead>
          <FootHeading>Contato</FootHeading>
          <Describe as="p">Sinta-se a vontade em entrar em contato. Seja este relacionado a uma vaga, dúvida a respeito
          de algo que está no portfólio ou simplesmente pra trocar umas figurinhas :)</Describe>
        </FooterHead>
        <Content>
          <FooterList />
          <FooterIcons />
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
