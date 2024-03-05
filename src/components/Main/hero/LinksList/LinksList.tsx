import React from "react";
import Link from "next/link";
import HeroLink from "@/components/Main/hero/HeroLink";
import {LinksListStyle} from "@/components/Main/hero/LinksList/LinksList.style";

function LinksList() {
  return (
    <LinksListStyle>
      <HeroLink name="github" href="https://github.com/brunomoleta" />
      <HeroLink
        name="linkedin"
        href="https://www.linkedin.com/in/bruno-moleta-santos-desenvolvedor-full-stack/"
      />
      <HeroLink
        name="currículo vitae"
        href="/"
      />
    </LinksListStyle>
  );
}

export default LinksList;
