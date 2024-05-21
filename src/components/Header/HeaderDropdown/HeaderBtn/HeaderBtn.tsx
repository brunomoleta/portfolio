import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DSubTrigger } from "@/components/Header/HeaderDropdown/HeaderDropdown.style";

function HeaderBtn() {
  return (
    <DSubTrigger aria-label="menu de opções">
      <HamburgerMenuIcon
        style={{ color: "var(--color-text)" }}
        height={30}
        width={30}
      />
    </DSubTrigger>
  );
}

export default HeaderBtn;
