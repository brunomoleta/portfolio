"use client";
import React from "react";
import { setCookie } from "cookies-next";
import { DARK_COLORS, LIGHT_COLORS } from "@/styles/colors.ts";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { PageTheme } from "@/types/types";
import DarkLightIcon from "@/components/DarkLightToggle/DarkLightIcon";

interface Theme {
  initialTheme: string;
}

function DarkLightToggle({ initialTheme }: Theme) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const newTheme: PageTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    const dateString: string = "2040/01/01";
    const formattedDate = new Date(dateString);

    setCookie("color-theme", newTheme, { expires: formattedDate });

    const root = document.documentElement;
    const colors = newTheme === "dark" ? DARK_COLORS : LIGHT_COLORS;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button
      style={{
        width: "40px",
        height: "100%",
        minWidth: "40px",
        paddingBlock: "var(--s1)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
      onClick={handleClick}
    >
      <DarkLightIcon theme={theme} />
      <VisuallyHidden>Toggle light / dark mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;