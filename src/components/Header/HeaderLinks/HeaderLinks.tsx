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
            style={{
              display: "block",
              paddingInline: "var(--s0)",
              overflow: "hidden",
            }}
            href={item.href}
          >
            <span style={{ display: "inline-block" }}>{upper(item.name)}</span>
          </Link>
        </li>
      ))}
    </HLinks>
  );
}

export default HeaderLinks;
