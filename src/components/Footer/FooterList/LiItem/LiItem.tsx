import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import {upper} from "@/services/service";
import {Span} from "@/components/Footer/FooterList/LiItem/LiItem.style";

function LiItem({ topic, href, value }: IItem) {
  return (
    <li style={{ display: "flex", flexWrap: "wrap",gap: "var(--s-3)" }}>
      <Span>{upper(topic)}:</Span>
      <ProjBtn href={href}>{value}</ProjBtn>
    </li>
  );
}

interface IItem {
  topic: string;
  href: string;
  value: string;
}

export default LiItem;
