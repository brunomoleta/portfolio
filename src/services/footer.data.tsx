import {CVLogo, GithubLogo, LinkedinLogo} from "@/components/Footer/FooterList/FooterList.style";
import React from "react";
import {cvLink, github, linkedin} from "@/services/data";

export const footerData = [
    {
        title: "ir para linkedin",
        href: linkedin,
        icon: <LinkedinLogo />,
    },
    {
        title: "ir para github",
        href: github,
        icon: <GithubLogo />,
    },
    {
        title: "ir para Currículo Vitae",
        href: cvLink,
        icon: <CVLogo />,
    },
];
