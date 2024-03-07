import React from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface ITechItem {
    name: string;
    logoImage: React.ReactNode;
    items: string[];
}

