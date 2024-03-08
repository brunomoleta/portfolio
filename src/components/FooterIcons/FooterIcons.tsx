import React from "react";

import { footerData } from "@/services/data";

import { IconsList } from "@/components/Footer/FooterList/FooterList.style";

import IconItem from "@/components/FooterIcons/IconItem";

function FooterIcons() {
  return (
    <IconsList>
      {footerData.map((item, index) => {
        return <IconItem item={item} key={index} />;
      })}
    </IconsList>
  );
}

export default FooterIcons;
