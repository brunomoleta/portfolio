"use client";
import React from "react";
import styled from "styled-components";
import { upper } from "@/services/service";

function TagItem({ tag }: { tag: string }) {
  return <TechItem>{upper(tag)}</TechItem>;
}

export default TagItem;

export const TechItem = styled.li`
  font-size: clamp(var(--font-body-sm-2), 5svw, var(--font-body-sm-4));

  text-align: center;
  padding: var(--s-4) var(--s1);

  border: 2px solid var(--cool-grey-90);
  border-radius: 16px;

  font-weight: 700;

  width: fit-content;

  background-color: var(--cool-grey-5);

  -webkit-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
  -moz-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
  box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
`;
