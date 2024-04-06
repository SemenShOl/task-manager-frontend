import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty(
      "--body-background-default",
      `var(--body-background-${theme})`
    );
    root.style.setProperty("--main-text-default", `var(--main-text-${theme})`);
    root.style.setProperty("--s-text-default", `var(--s-text-${theme})`);

    root.style.setProperty(
      "--navbar-background-default",
      `var(--navbar-background-${theme})`
    );
    root.style.setProperty(
      "--big-shadow-default",
      `var(--big-shadow-${theme})`
    );
    root.style.setProperty("--addit-default", `var(--addit-${theme})`);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
