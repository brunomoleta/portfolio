import { FootHeading, StyledFooter } from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import { Content } from "@/components/Footer/FooterList/FooterList.style";
import FooterIcons from "@/components/FooterIcons";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FootHeading>Contato</FootHeading>
        <Content>
          <FooterList />
          <FooterIcons />
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
