import React from "react";
import { upper } from "@/services/service";
import { ListItem } from "@/components/Main/hero/HeroLink/HeroLink.style";
import { HeroLinkProps } from "@/types/types";

function HeroLink({ item, ...props }: HeroLinkProps) {
  const { href, name } = item;

  return (
    <li>
      <ListItem {...props} href={href}>
        <div>{upper(name)}</div>
      </ListItem>
    </li>
  );
}

export default HeroLink;
