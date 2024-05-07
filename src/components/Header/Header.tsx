import Logo from "./Logo";
import { HeaderStyle } from "./Header.style";
import { FixedContainer } from "@/styles/Common.style";
import HeaderDropdown from "@/components/Header/HeaderDropdown";
import HeaderLinks from "@/components/Header/HeaderLinks";
import React from "react";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderStyle id="inicio">
      <FixedContainer>
        <Logo />
        {children}
        <HeaderLinks />
        <HeaderDropdown />
      </FixedContainer>
    </HeaderStyle>
  );
};

export default Header;
