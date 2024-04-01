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

            background-color: ${(props) => (props.isPrimary ? "var(--teal-60)" : "var(--cool-grey-30)")};
            color: ${(props) => (props.isPrimary ? "var(--cool-grey-5)" : "var(--cool-grey-90)")};

            transition: 300ms background-color;
                //border: ${(props) => !props.isPrimary && "2px solid var(--teal-50"};

            &:hover {
                background-color: ${(props) =>
                  props.isPrimary ? "var(--teal-80)" : "var(--cool-grey-10)"};
                color: ${(props) => (props.isPrimary ? "white" : "inherit")};
    `;

export const BtnContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-flow: column;
  gap: var(--s1);
`;
