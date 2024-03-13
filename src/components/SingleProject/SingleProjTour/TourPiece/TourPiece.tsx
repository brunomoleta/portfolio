import React from "react";

import { Piece } from "@/components/SingleProject/SingleProjTour/TourPiece/TourPiece.style";

function TourPiece({ children }: { children: React.ReactNode }) {
  return (
    <Piece>
      {children}
      <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
    </Piece>
  );
}

export default TourPiece;
