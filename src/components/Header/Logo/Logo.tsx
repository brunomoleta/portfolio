"use client";
import React from "react";
import { StyledLogo } from "./Logo.style";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import { useRouter } from "next/navigation";
import { wait } from "next/dist/lib/wait";

function Logo() {
  const { setStep } = useUtilsContext() as Utils;
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    wait(200);
    setStep(0);
  };

  return (
    <StyledLogo
      aria-label="Ir para página inicial"
      title="Ir para página inicial"
      onClick={handleClick}
    >
      B.
    </StyledLogo>
  );
}

export default Logo;
