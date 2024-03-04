import Logo from "./Logo";
import { HeaderStyle } from "./Header.style";
import { Container } from "@/styles/Common.style";
import HeaderDropdown from "@/components/Header/HeaderDropdown";


export const Header = () => {
    return <HeaderStyle>
        <Container>

        <Logo/>
        <HeaderDropdown/>
        
        </Container>
        </HeaderStyle>
}

export default Header;