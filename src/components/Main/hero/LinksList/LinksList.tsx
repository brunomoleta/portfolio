import React from "react";
import HeroLink from "@/components/Main/hero/HeroLink";
import {
  Container,
  LinksListStyle,
  WholeContainer,
} from "@/components/Main/hero/LinksList/LinksList.style";
import { linksList } from "@/services/data";
import SectionHeader from "@/components/SectionHeader";

function LinksList() {
  return (
    <WholeContainer>
      <Container>
        <SectionHeader isBlack={false} word="links:" />
        <LinksListStyle style={{ rowGap: "var(--s1)", columnGap: "var(--s0)" }}>
          {linksList.map((item, index) => (
            <HeroLink
              style={{ paddingBlock: "var(--s-3)" }}
              key={index}
              item={item}
            />
          ))}
        </LinksListStyle>
      </Container>
    </WholeContainer>
  );
}

export default LinksList;
