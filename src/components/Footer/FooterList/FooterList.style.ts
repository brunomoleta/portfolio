"use client";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import styled from "styled-components";

export const FooterHead = styled.div`
  margin-inline-end: auto;
  display: grid;
  gap: var(--s0);
`;

export const Content = styled.div`
  min-width: 100%;
  display: flex;
  flex-flow: column;

  gap: var(--s1);
`;
export const List = styled.ul`
  display: flex;
  flex-flow: column;
  gap: var(--s-1);

  & * {
    padding: 0;
  }
`;
export const IconsList = styled.ul`
  display: flex;
  gap: var(--s0);
`;

export const GithubLogo = styled(GitHubLogoIcon)`
  color: var(--teal-primary);
  width: 25px;
  height: 25px;

  &:hover {
    color: var(--teal-60);
  }

  &:active {
    color: var(--teal-60);
  }
  &:focus {
    color: var(--teal-60);
  }
`;

export const LinkedinLogo = styled(LinkedInLogoIcon)`
  color: var(--teal-primary);
  width: 25px;
  height: 25px;

  &:hover {
    color: var(--teal-60);
  }

  &:active {
    color: var(--teal-60);
  }
  &:focus {
    color: var(--teal-60);
  }
`;
export const CVLogo = styled(FileTextIcon)`
  color: var(--teal-primary);
  width: 25px;
  height: 25px;

  &:hover {
    color: var(--teal-60);
  }

  &:active {
    color: var(--teal-60);
  }
  &:focus {
    color: var(--teal-60);
  }
`;
