import React from "react";
import {StaticImageData} from "next/image";

export interface ChildrenProps {
    children: ReactNode;
}

export interface ITechItem {
    name: string;
    logoImage: React.ReactNode;
    items: string[];
}

export interface IProject {
    title: string;
    subTitle: string;
    tags: string[];
    illustration: StaticImageData;
    live: string;
    doc: string;
    backEndRepo: string;
    frontEndRepo: string;
}