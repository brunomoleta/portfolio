import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function DarkLightIcon({ theme }: { theme: string }) {
  if (theme === "dark")
    return (
      <SunIcon style={{ color: "var(--color-text)" }} fontSize={"1.5rem"} />
    );
  return (
    <MoonIcon style={{ color: "var(--color-text)" }} fontSize={"1.5rem"} />
  );
}

export default DarkLightIcon;
