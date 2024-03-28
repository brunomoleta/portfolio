import React from "react";
import { Item, PItem } from "@/components/SingleProject/SingleProject.style";
import { upper } from "@/services/service";

function InfoItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Item>
      <PItem>{upper(title)}:</PItem>
      {children}
    </Item>
  );
}

export default InfoItem;
