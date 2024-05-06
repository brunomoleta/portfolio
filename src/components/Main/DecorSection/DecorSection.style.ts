"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100%;
  height: 160px;
  overflow: hidden;
  display: flex;

  border-radius: var(--s0);

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
`;

export const DecorSectionStyle = styled.section`
  display: flex;
  flex-flow: column;
`;

export const DecorWrapper = styled.div`
  min-width: 100%;

  display: flex;
  flex-flow: column;
  gap: var(--s-1);
`;

export const Describe = styled.small`
  display: block;
  color: var(--color-text-third);
  margin-inline-start: auto;
  margin-block-start: var(--s-1);
  font-size: var(--font-body-sm-3);
  line-height: 130%;
  width: fit-content;
`;
