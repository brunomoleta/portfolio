"use client";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  position: relative;

  padding-block-start: 1px;
  border-block-end-color: inherit;

  background-color: var(--color-background);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -18px;
    height: 18px;
    background: var(--gradient-teal-70);
    opacity: 1;
    transition: opacity 800ms ease-in;
  }
`;
