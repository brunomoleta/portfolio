import React from "react";
import { Describe } from "../Main/DecorSection/DecorSection.style";
import { upper } from "@/services/service.ts";

function SmallDescription({ small }: { small: string }) {
  return (
    <>
      <Describe>Página: {upper(small)}</Describe>
      <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
    </>
  );
}

export default SmallDescription;
