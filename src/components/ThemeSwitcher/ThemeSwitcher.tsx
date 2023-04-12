import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? "Ligth" : "Dark";
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "Dark" : "Light");
  }, [isDark]);
  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <p>{themeText}</p>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
