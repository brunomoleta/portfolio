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

  background-color: ${(props) =>
    props.isPrimary ? "var(--teal-70)" : "var(--cool-grey-30)"};
  color: ${(props) =>
    props.isPrimary ? "var(--cool-grey-5)" : "var(--cool-grey-90)"};

  &:hover {
    background-color: ${(props) =>
      props.isPrimary ? "var(--teal-90)" : "var(--cool-grey-10)"};
    color: ${(props) => (props.isPrimary ? "white" : "inherit")};
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: 300ms background-color;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-flow: column;
  gap: var(--s1);
  margin-block: var(--s0);
`;
