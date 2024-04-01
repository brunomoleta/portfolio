import React from "react";
import {
  DContent,
  MenuDropdown,
} from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import DropdownItem from "@/components/Header/HeaderDropdown/DropdownItem";
import { dropdownList } from "@/services/header.data";
import HeaderBtn from "@/components/Header/HeaderDropdown/HeaderBtn";

function HeaderDropdown() {
  return (
    <MenuDropdown>
      <HeaderBtn />
      <DContent gutter={50}>
        {dropdownList.map((item, index) => (
          <DropdownItem key={index} name={item.name} href={item.href} />
        ))}
      </DContent>
    </MenuDropdown>
  );
}

export default HeaderDropdown;
