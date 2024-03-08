'use client'
import React from "react";
import Link from "next/link";
import { DItem } from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import { useRouter } from "next/navigation";
import {upper} from "@/services/service";

interface ItemProps {
  href: string;
  name: string;
}

function DropdownItem({ href, name }: ItemProps) {
  const router = useRouter();
  return (
    <DItem onClick={() => router.push(href)}>
      <Link href={href}>{upper(name)}</Link>
    </DItem>
  );
}

export default DropdownItem;
