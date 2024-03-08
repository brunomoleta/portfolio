import Logo from "./Logo";
import { HeaderStyle } from "./Header.style";
import { FixedContainer } from "@/styles/Common.style";
import HeaderDropdown from "@/components/Header/HeaderDropdown";

export const Header = () => {
  return (
    <HeaderStyle>
      <FixedContainer>
        <Logo />
        <HeaderDropdown />
      </FixedContainer>
    </HeaderStyle>
  );
};

export default Header;
