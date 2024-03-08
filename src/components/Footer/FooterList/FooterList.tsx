import React from 'react';
import {whatsappURL} from "@/services/data";
import {List} from "@/components/Footer/FooterList/FooterList.style";
import LiItem from "@/components/Footer/FooterList/LiItem";

function FooterList() {
  return <List>
    <LiItem href="mailto:brunomoleta@pm.me" value="brunomoleta@pm.me" topic="email"/>
    <LiItem href={whatsappURL} value="+55 (41) 9.9223.8239" topic="whatsapp"/>

  </List>;
}

export default FooterList;
