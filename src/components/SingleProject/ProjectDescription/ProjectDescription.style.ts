"use client";
import styled from "styled-components";
import Image from "next/image";

export const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  opacity: 0.85;
  margin-block-start: var(--s-2);
`;
export const AuthorLi = styled.li`
  display: flex;
  line-height: 135%;
  width: 100%;
  gap: var(--s-1);
  align-items: center;
  @media (min-width: 600px) {
    flex-flow: column;
  }
`;
export const AuthorUL = styled.ul`
  display: flex;
  flex-flow: column;
  gap: var(--s0);

  & > :last-child {
    margin-block-end: var(--s-2);
  }

  @media (min-width: 600px) {
    flex-flow: unset;
    gap: var(--s2);
    justify-content: space-between;
  }
`;
