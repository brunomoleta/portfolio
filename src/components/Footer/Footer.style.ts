"use client";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-background);

  width: 100%;
  padding-block: var(--s2) var(--s3);

  border-block-start: 2px solid var(--cool-grey-30);
  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const FootHeading = styled.h3`
  color: var(--color-text);
  font-weight: var(--weight-light);
  font-size: clamp(var(--font-heading-6), 4svw + 1rem, var(--font-heading-5));
  margin-inline-end: auto;
`;

export const Message = styled.h4`
  color: var(--color-text-third);
  font-size: var(--font-body-sm-3);

  line-height: 150%;
`;
