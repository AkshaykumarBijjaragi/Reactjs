import { useEffect, useState } from "react";

export default function UseLocalStorage(defaultValue) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("mode");

    return storedTheme ? storedTheme : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);
  return [theme, setTheme];
}
