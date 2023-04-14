import { LocalGitHubUser } from "../../types/user";
import { UserStat } from "../UserStat";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => {return(
  <div className={styles.userCart}>
    <UserStat
    repos={props.repos}
    followers={props.followers}
    following={props.following}
    />
  </div>
)};
