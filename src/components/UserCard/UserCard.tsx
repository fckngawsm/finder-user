import { LocalGitHubUser } from "../../types/user";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'Profile without bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  );
};
