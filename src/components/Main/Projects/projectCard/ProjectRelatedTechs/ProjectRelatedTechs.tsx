import React from "react";
import TagItem from "@/components/TagItem";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";

function ProjectRelatedTechs({ tags }: { tags: string[] }) {
  return (
    <LinksListStyle style={{ marginBlock: "4ex" }}>
      {tags.map((tag: string, index: number) => (
        <TagItem key={index} tag={tag} />
      ))}
    </LinksListStyle>
  );
}

export default ProjectRelatedTechs;
