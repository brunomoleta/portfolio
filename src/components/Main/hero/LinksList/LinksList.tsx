import React from "react";
import HeroLink from "@/components/Main/hero/HeroLink";
import {Container, LinksListStyle, WholeContainer} from "@/components/Main/hero/LinksList/LinksList.style";
import { linksList } from "@/services/data";
import SectionHeader from "@/components/SectionHeader";

function LinksList() {
  return (
    <WholeContainer>
      <Container>
        <SectionHeader word="links:" />
        <LinksListStyle>
          {linksList.map((item, index) => (
            <HeroLink key={index} item={item} />
          ))}
        </LinksListStyle>
      </Container>
    </WholeContainer>
  );
}

export default LinksList;
