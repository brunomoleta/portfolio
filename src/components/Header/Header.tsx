import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "./Logo";
import { HeaderStyle } from "./Header.style";
import { Container } from "@/styles/Common.style";
import {HeaderDropdown} from "./"

export const Header = () => {
    return <HeaderStyle>
        <Container>

        <Logo/>
        <HeaderDropdown/>
        
        </Container>
        </HeaderStyle>
}

export default Header;