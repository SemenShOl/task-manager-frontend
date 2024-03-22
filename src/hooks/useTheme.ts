import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || ""
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
