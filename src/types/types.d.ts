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

    href: string;
}

export interface HeroLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    item: {
        name: string;
        href: string;
    };
}

export interface IIcon {
    item: {title: string, href: string, icon: React.JSX.Element}
}