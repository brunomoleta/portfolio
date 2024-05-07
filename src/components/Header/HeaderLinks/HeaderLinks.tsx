"use client";
import React from "react";
import { dropdownList } from "@/services/header.data";
import Link from "next/link";
import { HLinks } from "@/components/Header/HeaderLinks/Links.style";
import { upper } from "@/services/service";

function HeaderLinks() {
  return (
    <HLinks>
      {dropdownList.map((item, index) => (
        <li key={index}>
          <Link
            style={{ display: "block", paddingInline: "var(--s0)" }}
            href={item.href}
          >
            {upper(item.name)}
          </Link>
        </li>
      ))}
    </HLinks>
  );
}

export default HeaderLinks;
