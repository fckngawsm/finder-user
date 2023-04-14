import { LocalGitHubUser } from "../../types/user";
import styles from "./UserStat.module.scss";

interface UserStatProps
  extends Pick<LocalGitHubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}>Repository</h2>
        <h3 className={styles.infoNumber}>{repos}</h3>
      </div>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}>Followers</h2>
        <h3 className={styles.infoNumber}>{followers}</h3>
      </div>
      <div className={styles.info}>
        <h2 className={styles.infoTitle}>Following</h2>
        <h3 className={styles.infoNumber}>{following}</h3>
      </div>
    </div>
  );
};
