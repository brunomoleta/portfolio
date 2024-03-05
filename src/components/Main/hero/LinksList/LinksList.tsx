import React from "react";
import HeroLink from "@/components/Main/hero/HeroLink";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";
import { linksList } from "@/services/data";

function LinksList() {
  return (
    <LinksListStyle>
      {linksList.map((item) => (
        <HeroLink name={item.name} href={item.href} />
      ))}
    </LinksListStyle>
  );
}

export default LinksList;
