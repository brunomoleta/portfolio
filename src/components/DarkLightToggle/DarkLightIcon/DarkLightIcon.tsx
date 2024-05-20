import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function DarkLightIcon({ theme }: { theme: string }) {
  if (theme === "dark") return <SunIcon className="darkmode-icon" />;
  return <MoonIcon className="darkmode-icon" />;
}

export default DarkLightIcon;
