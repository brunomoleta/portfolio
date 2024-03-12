import React from "react";

import { IconsList } from "@/components/Footer/FooterList/FooterList.style";

import IconItem from "@/components/FooterIcons/IconItem";
import { footerData } from "@/services/footer.data";

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
