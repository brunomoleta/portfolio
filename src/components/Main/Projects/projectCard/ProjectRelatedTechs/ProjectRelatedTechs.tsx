import React from "react";
import TagItem from "@/components/TagItem";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";
import { Heading } from "@/components/Main/Stack/Stack.style.ts";

function ProjectRelatedTechs({
  tags,
  heading,
}: {
  tags: string[];
  heading: string;
}) {
  return (
    <div>
      <Heading
        isBlack={true}
        style={{ fontSize: "1rem", borderBottom: "2px solid var(--teal-50)" }}
      >
        {heading}
      </Heading>
      <LinksListStyle style={{ marginBlock: "1ex" }}>
        {tags.map((tag: string, index: number) => (
          <TagItem key={index} tag={tag} />
        ))}
      </LinksListStyle>
    </div>
  );
}

export default ProjectRelatedTechs;
