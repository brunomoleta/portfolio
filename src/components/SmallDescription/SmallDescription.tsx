import React from "react";
import { Describe } from "../Main/DecorSection/DecorSection.style";
import { upper } from "@/services/service.ts";

function SmallDescription({ small }: { small: string }) {
  return (
    <>
      <Describe>Página: {upper(small)}</Describe>
      <hr />
    </>
  );
}

export default SmallDescription;
