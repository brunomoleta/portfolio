import Logo from "./Logo";
import { HeaderStyle } from "./Header.style";
import { FixedContainer } from "@/styles/Common.style";
import HeaderDropdown from "@/components/Header/HeaderDropdown";
import HeaderLinks from "@/components/Header/HeaderLinks";

export const Header = () => {
  return (
    <HeaderStyle id="inicio">
      <FixedContainer>
        <Logo />
        <HeaderLinks />
        <HeaderDropdown />
      </FixedContainer>
    </HeaderStyle>
  );
};

export default Header;
