import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DSubTrigger } from "@/components/Header/HeaderDropdown/HeaderDropdown.style";

function HeaderBtn() {
  return (
    <DSubTrigger>
      <HamburgerMenuIcon height={30} width={30} />
    </DSubTrigger>
  );
}

export default HeaderBtn;
