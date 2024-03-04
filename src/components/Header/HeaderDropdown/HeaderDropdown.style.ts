export const DContent = styled(DropdownMenu.Content)`


  width: 100%;
    max-width: 500px;

  background-color: white;
  border-radius: 6px;

  padding: 8px;
  padding-block: 16px;

  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  will-change: transform, opacity;
`;

export const DSubTrigger = styled(DropdownMenu.SubTrigger)`
  cursor: pointer;

  &:hover {
    outline: 2px solid var(--teal-60);
  }
`;
export const DItem = styled(DropdownMenu.Item)`
  padding-block: 4px;
  font-weight: 500;
  background-color: var(--cool-grey-5);
  padding-block-end: 8px;
  padding-inline: 8px;

  &:hover {
    outline: 2px solid var(--teal-60);
  }

`;

export const DSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  color: var(--teal-40);
`;


export const DSubContent = styled(DropdownMenu.SubContent)`  

font-weight: 500;
  width: auto;
  max-width: 14ch;
  background-color: white;
  border-radius: 6px;

  padding-inline: 8px;
  padding-block: 16px;

  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;
