"use client";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    50% {
      opacity: 0.25;
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  animation: fadeIn 1500ms ease-out both;
  animation-delay: 700ms;

  display: flex;
  flex-flow: column;
  gap: var(--s-1);
  aspect-ratio: 5/7.49;

  background-color: transparent;
  border-radius: var(--s-1);
  box-shadow: rgba(0, 0, 0, 0.45) 0 5px 15px 0;
  height: fit-content;
  overflow: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  position: relative;
`;
