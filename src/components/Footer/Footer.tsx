import { FootHeading, Message, StyledFooter } from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import {
  Content,
  FooterHead,
} from "@/components/Footer/FooterList/FooterList.style";
import FooterIcons from "@/components/FooterIcons";
import { Describe } from "@/components/Main/Stack/Stack.style";
import React from "react";
import Balancer from "react-wrap-balancer";
import { footer1, madeBy } from "@/services/footer.data";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FooterHead>
          <FootHeading>Contato</FootHeading>
          <Describe as="p">
            <Balancer>{footer1}</Balancer>
          </Describe>
        </FooterHead>
        <Content>
          <FooterIcons />
          <FooterList />
          <Message>
            <Balancer>{madeBy}</Balancer>
          </Message>
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
