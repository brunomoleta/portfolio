import React from "react";

import { Piece } from "@/components/SingleProject/SingleProjTour/TourPiece/TourPiece.style";

function TourPiece({ children }: { children: React.ReactNode }) {
  return <Piece>{children}</Piece>;
}

export default TourPiece;
