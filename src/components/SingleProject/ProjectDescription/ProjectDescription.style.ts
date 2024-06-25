"use client";
import styled from "styled-components";
import Image from "next/image";

export const Avatar = styled(Image)`
  --avatar-size: 80px;
  min-width: var(--avatar-size);
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50px;
  opacity: 0.85;
`;

export const Name = styled.span`
  @media (min-width: 600px) {
    max-width: 80px;
  }
`;
export const AuthorLi = styled.li`
  display: flex;
  line-height: 135%;
  width: fit-content;
  gap: var(--s-1);
  align-items: center;
  text-align: center;

  &:first-child > ${Name} {
    text-align: initial;
  }

  @media (min-width: 600px) {
    flex-flow: column;
  }
`;

export const AuthorUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s0);
  margin-block-start: var(--s-2);

  & > :last-child {
    margin-block-end: var(--s-2);
  }

  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;
