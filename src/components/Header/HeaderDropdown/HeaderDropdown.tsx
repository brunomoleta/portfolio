import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DContent,
  DSubTrigger,
  MenuProvider,
} from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import DropdownItem from "@/components/Header/HeaderDropdown/DropdownItem";
import { dropdownList } from "@/services/data";

function HeaderDropdown() {
  return (
    <MenuProvider>
      <DSubTrigger>
        <HamburgerMenuIcon />
      </DSubTrigger>
      <DContent gutter={32}>
        {dropdownList.map((item, index) => (
          <DropdownItem key={index} name={item.name} href={item.href} />
        ))}
      </DContent>
    </MenuProvider>
  );
}

export default HeaderDropdown;
