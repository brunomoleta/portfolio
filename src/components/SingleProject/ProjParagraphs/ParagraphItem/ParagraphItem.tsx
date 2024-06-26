import React from "react";
import { Header } from "@/components/SingleProject/SingleProjHeader/SingleProjHeader.style";
import { upper } from "@/services/service";
import {
  ContentList,
  Item,
} from "@/components/Main/Stack/AContent/AContent.style";
import Balancer from "react-wrap-balancer";

function ParagraphItem({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) {
  return (
    <div>
      <Balancer>
        <Header as="h2">{upper(title)}:</Header>
        {typeof content === "string" && <p>{content}</p>}
        {Array.isArray(content) && (
          <ContentList>
            {content.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </ContentList>
        )}
      </Balancer>
    </div>
  );
}

export default ParagraphItem;
