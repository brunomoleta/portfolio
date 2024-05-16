"use client";
import styled from "styled-components";

export const HLinks = styled.ul`
  --translate: var(--s1);
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: var(--translate);
  font-weight: var(--weight-medium);
  padding-block: var(--s0);

  @keyframes swap {
    from {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 100%);
    }
    36% {
      transform: translate(-200%, 100%);
    }

    46% {
      transform: translate(-200%, -200%);
    }
    65% {
      transform: translate(0, -200%);
    }

    to {
      transform: translate(0, 0);
    }
  }

  @keyframes fall {
    from {
      transform: translate(0, -100%);
      opacity: 0;
    }
    60% {
      opacity: 0.25;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  animation: fall 1200ms both;
  animation-delay: 1000ms;

  & > li > a:hover > span {
    animation: swap 500ms ease-out both;
    color: var(--teal-primary);
  }

  @media (max-width: 850px) {
    gap: var(--s0);
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
