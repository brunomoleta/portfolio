"use client";
import styled from "styled-components";

export const Header = styled.h3`
  color: black;
  font-weight: 500;

  width: fit-content;

  line-height: 130%;
  font-size: clamp(var(--font-body-sm-1), 6svw + 1rem, var(--font-body-4));

  border-bottom: 2px solid var(--teal-30);
`;
