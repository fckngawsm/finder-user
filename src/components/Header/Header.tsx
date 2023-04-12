import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.logo}>finder</h1>
    <ThemeSwitcher />
  </div>
);
