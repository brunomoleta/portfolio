import React from "react";
import { upper } from "@/services/service.ts";
import {Describe} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style.ts";

function SmallDescription({ small }: { small: string }) {
  return (
    <>
      <Describe>Página: {upper(small)}</Describe>
      <hr />
    </>
  );
}

export default SmallDescription;
