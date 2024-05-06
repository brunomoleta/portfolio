import React from "react";
import { StaticImageData } from "next/image";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ITechItem {
  name: string;
  logoImage: React.ReactNode;
  items: string[];
}

interface ICommon {
  id: number;
  url: string;
  step: number;
}

export interface IBackData {
  code: React.ReactNode;
  explain: string;
  small: string;
}

export interface BackEndFull {
  id: number;
  step: number;

  bResponsibilities: string[];
  BChallenges: string[];
  bLearning: string[];
  bNextSteps: string[];

  doc: string;
  backContent: IBackData[];

  backEndRepo;
}

export interface ITestsData {
  explain: string;
  small: string;
  gif: StaticImageData;
}

export interface TestsFull {
  id: number;
  step: number;
  devOpsContent?: ITestsData[];
  testGoals: string;
  devopsTags: string[];
}

export interface IAuthors {
  name: string;
  image: StaticImageData;
}

export interface Intro {
  id: number;
  step: number;
  url: string;
  authors: IAuthors[];
  about1: string;
  about2: string;
  motivation: string;
  target: string;
  date: string;
  goals: string;
}

export interface IFrontData {
  image: StaticImageData;
  alt: string;
  small: string;
  explain: string;
}

export interface FrontEndFull {
  id: number;
  step: number;

  live: string;
  frontEndRepo: string;
  frontContent: IFrontData[];
  fResponsibilities: string[];
  fChallenges: string[];
  fLearning: string[];
  fNextSteps: string[];
}

export interface IProject {
  id: number;

  title: string;
  subTitle: string;

  frontendTags: string[];
  backendTags: string[];
  devopsTags: string[];

  illustration: StaticImageData;

  href: string;
}

export interface HeroLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item: {
    name: string;
    href: string;
  };
}

export interface IIcon {
  item: { title: string; href: string; icon: React.JSX.Element };
}
export type PageTheme = "dark" | "light";
