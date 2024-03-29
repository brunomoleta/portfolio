"use client";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;

  padding-block: var(--s2) var(--s3);

  border-block-start: 2px solid var(--cool-grey-30);
  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const FootHeading = styled.h3`
  font-weight: 300;
  font-size: clamp(var(--font-heading-6), 4svw + 1rem, var(--font-heading-5));
  margin-inline-end: auto;
`;

export const Message = styled.h5`
  color: var(--cool-grey-60);
  font-size: var(--font-body-sm-3);

  line-height: 150%;
`;
