import React from "react";
import HeroLink from "@/components/Main/hero/HeroLink";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";
import { linksList } from "@/services/data";
import SectionHeader from "@/components/SectionHeader";

function LinksList() {
  return (
    <div>
      <SectionHeader word="links:" />
      <LinksListStyle>
        {linksList.map((item, index) => (
          <HeroLink key={index} item={item} />
        ))}
      </LinksListStyle>
    </div>
  );
}

export default LinksList;
