"use client";
import React from "react";
import { StyledLogo } from "./Logo.style";
import { useRouter } from "next/navigation";
import { wait } from "next/dist/lib/wait";
import { useUtilsStore } from "@/providers/utils.store.ts";

function Logo() {
  const { returnFirstStep } = useUtilsStore();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    wait(200);
    returnFirstStep();
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
