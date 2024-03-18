import React from "react";
import { HeadWrapper } from "@/components/SingleProject/SingleProject.style";

import { ChildrenProps } from "@/types/types";

function SectionInfo({ children }: ChildrenProps) {
  return <HeadWrapper>{children}</HeadWrapper>;
}

export default SectionInfo;
