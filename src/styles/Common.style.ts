"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--desktop-width);
  margin: auto;

  padding-inline: clamp(1px, 3%, var(--page-alignment));
  margin-block: var(--s1);

  display: flex;
  flex-flow: column;
  gap: var(--s3);
`;

export const FixedContainer = styled(Container)`
  display: flex;
  flex-flow: revert;
  justify-content: space-between;
  align-items: center;
`;

export const FooterContainer = styled(FixedContainer)`
  margin-block: initial;
  flex-flow: column;
  gap: var(--s1);
`;

export const MainStyles = styled.main`
  width: 100%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  max-width: 960px;
  height: 720px;
  border-radius: var(--s-1);
  border: 2px solid var(--cool-grey-40);
`;
export const IFrameWrapper = styled.div`
  border-radius: var(--s-1);
  box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
  max-width: 960px;
  width: 100%;
  height: 720px;
  position: relative;
`;
