import {FootHeading, StyledFooter} from "./Footer.style";
import { FooterContainer } from "@/styles/Common.style";
import FooterList from "@/components/Footer/FooterList";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {Content, List} from "@/components/Footer/FooterList/FooterList.style";

export const Footer = () => {
  return (
    <StyledFooter id="contato">
      <FooterContainer>
        <FootHeading>Contato</FootHeading>
        <Content>
          <FooterList />
            <List>

            </List>
          <LinkedInLogoIcon width={25} height={25} style={{color:"var(--cool-grey-60"}}/>
          <GitHubLogoIcon width={25} height={25} style={{color:"var(--cool-grey-60"}}/>
        </Content>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
