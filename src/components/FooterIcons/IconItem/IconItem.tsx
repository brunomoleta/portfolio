import React from "react";
import Link from "next/link";
import { IIcon } from "@/types/types";

function IconItem({ item }: IIcon) {
  const { title, href, icon } = item;
  return (
    <li style={{ display: "grid" }} key={title}>
      <Link
        title={title}
        aria-label={title}
        href={href}
        style={{ padding: "var(--s-2) var(--s-2) var(--s-2) 0" }}
      >
        {icon}
      </Link>
    </li>
  );
}

export default IconItem;
