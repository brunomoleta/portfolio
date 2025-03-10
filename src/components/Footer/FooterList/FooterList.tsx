import React from "react";
import { whatsappURL } from "@/services/data";
import { List } from "@/components/Footer/FooterList/FooterList.style";
import LiItem from "@/components/Footer/FooterList/LiItem";

function FooterList() {
  return (
    <List>
      <LiItem
        href="mailto:moleta.pr@lopesgold.com.br"
        value="moleta.pr@lopesgold.com.br"
        topic="email"
      />
      <LiItem
        href={whatsappURL}
        value="+55 (41) 9.9228.1134"
        topic="whatsapp"
      />
    </List>
  );
}

export default FooterList;
