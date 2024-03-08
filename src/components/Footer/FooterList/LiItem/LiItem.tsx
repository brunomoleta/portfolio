import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { upper } from "@/services/service";
import {
  ListItem,
  Span,
} from "@/components/Footer/FooterList/LiItem/LiItem.style";

function LiItem({ topic, href, value }: IItem) {
  return (
    <ListItem>
      <Span>{upper(topic)}:</Span>
      <ProjBtn href={href}>{value}</ProjBtn>
    </ListItem>
  );
}

interface IItem {
  topic: string;
  href: string;
  value: string;
}

export default LiItem;
