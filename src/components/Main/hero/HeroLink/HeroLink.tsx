import React from "react";
import Link from "next/link";
import { upper } from "@/services/service";
import {ListItem} from "@/components/Main/hero/HeroLink/HeroLink.style";

interface HeroLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
}

function HeroLink({ name, href, ...props }: HeroLinkProps) {
  return (
    <li>
      <ListItem {...props} href={href}>
        {upper(name)}
      </ListItem>
    </li>
  );
}

export default HeroLink;
