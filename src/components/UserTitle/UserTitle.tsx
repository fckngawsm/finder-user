import { LocalGitHubUser } from "../../types/user";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGitHubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-Gb", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date (created))
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
    );
};
