import React from "react";
import { DContent } from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import DropdownItem from "@/components/Header/HeaderDropdown/DropdownItem";
import { dropdownList } from "@/services/header.data";
import * as Ariakit from "@ariakit/react";
import HeaderBtn from "@/components/Header/HeaderDropdown/HeaderBtn";

function HeaderDropdown() {
  return (
    <Ariakit.MenuProvider>
      <HeaderBtn />
      <DContent gutter={50}>
        {dropdownList.map((item, index) => (
          <DropdownItem key={index} name={item.name} href={item.href} />
        ))}
      </DContent>
    </Ariakit.MenuProvider>
  );
}

export default HeaderDropdown;
