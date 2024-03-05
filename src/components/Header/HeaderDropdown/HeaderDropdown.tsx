'use client'
import React from "react";

import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Ariakit from "@ariakit/react";
import {
  DContent,
  DItem,
  DSubTrigger,
  MenuProvider,
} from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import { useRouter } from "next/navigation";

function HeaderDropdown() {
  const router = useRouter();
  return (
    <MenuProvider>
      <DSubTrigger>
        <HamburgerMenuIcon />
      </DSubTrigger>
      <DContent gutter={32}>
        <DItem onClick={() => router.push("/")}>
          <Link href="/">Home</Link>
        </DItem>
        <DItem onClick={() => router.push("/sobre-bruno")}>
          <Link href="/sobre-bruno">Sobre o Bruno</Link>
        </DItem>
        <DItem onClick={() => router.push("/#contato")}>
          <Link href="/#contato">Contato</Link>
        </DItem>
      </DContent>
    </MenuProvider>
  );
}

export default HeaderDropdown;
