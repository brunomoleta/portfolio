import React from "react";
import Link from "next/link";
import { IIcon } from "@/types/types";

function IconItem({ item }: IIcon) {
  const { title, href, icon } = item;
  return (
    <li key={title}>
      <Link title={title} href={href}>
        {icon}
      </Link>
    </li>
  );
}

export default IconItem;
