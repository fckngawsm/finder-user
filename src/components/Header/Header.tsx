import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => (
  <div className={styles.header} data-testid="Header">
    <h1 className={styles.logo}>finder</h1>
    <ThemeSwitcher />
  </div>
);
