import React from "react";
import { StaticImageData } from "next/image";
import { DurvalTests } from "@/services/tests.data.ts";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ITechItem {
  name: string;
  logoImage: React.ReactNode;
  items: string[];
}

interface ICommon {
  goals: string;
  Fresponsibilities: string[];
  Bresponsibilities: string[];

  FChallenges: string[];
  BChallenges: string[];

  Flearning: string[];
  Blearning: string[];

  FnextSteps: string[];
  BnextSteps: string[];

  target: string;
}

export interface IFrontData {
  image: StaticImageData;
  alt: string;
  small: string;
  explain: string;
}

export interface IBackData {
  code: React.ReactNode;
  explain: string;
  small: string;
}

export interface ITestsData {
  explain: string;
  small: string;
  gif: StaticImageData;
}

export interface IAuthors {
  name: string;
  image: StaticImageData;
}

export interface IProject extends ICommon {
  id: number;
  url: string;

  title: string;
  subTitle: string;

  about1: string;
  about2: string;
  motivation: string;

  tags: string[];
  frontendTags: string[];
  backendTags: string[];
  devopsTags: string[];

  illustration: StaticImageData;
  live: string;
  doc: string;
  backEndRepo: string;
  frontEndRepo: string;
  authors: IAuthors[];
  href: string;

  frontContent: IFrontData[];
  backContent: IBackData[];

  devOpsContent?: ITestsData[];
  testGoals: string;

  date: string;
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
