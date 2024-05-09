"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;

  padding-inline: clamp(var(--s-1), 5svw, var(--s7));
  margin-block: var(--s1);

  display: flex;
  flex-flow: column;
  gap: clamp(var(--s-1), 3%, var(--s3));
`;

export const FixedContainer = styled(Container)`
  display: flex;
  flex-flow: revert;
  align-items: center;
  margin-block: var(--s-1);
`;

export const FooterContainer = styled(FixedContainer)`
  margin-block: initial;
  flex-flow: column;
  gap: var(--s1);
`;

export const MainStyles = styled.main`
  padding-block: var(--s0);
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
`;

export const Iframe = styled.iframe`
  width: 100%;
  max-width: 960px;
  height: 720px;
  margin-inline-start: auto;
  border-radius: var(--s-1);
  border: 2px solid var(--cool-grey-40);
`;
export const IFrameWrapper = styled.div`
  margin-inline-start: auto;
  border-radius: var(--s-1);
  box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
  max-width: 960px;
  width: 100%;
  height: 720px;
  position: relative;
`;
