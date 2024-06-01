import styled from "styled-components";

type Props = {
  isPrimary?: boolean;
};
export const StepButton = styled.button<Props>`
  padding: var(--s-2) var(--s2);
  display: flex;
  gap: var(--s-1);
  justify-content: center;
  align-items: center;
  font-weight: 500;

  background-color: var(--teal-70);
  color: var(--cool-grey-5);

  &:hover {
    background-color: var(--teal-90);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      450ms background-color ease-in,
      700ms border ease-out;
    &:hover {
      transition:
        250ms background-color ease-out,
        350ms border ease-in;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-flow: column;
  gap: var(--s1);
  margin-block: var(--s0);
`;
