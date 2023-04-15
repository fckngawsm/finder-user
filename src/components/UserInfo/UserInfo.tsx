import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";
import { ReactComponent as IconLocation } from "../../assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconBlog } from "../../assets/icon-website.svg";
import { LocalGithubUser } from "../../types/user";
import { InfoItem, InfoItemProps } from "../InfoItem";
import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<LocalGithubUser, "company" | "blog" | "location" | "twitter"> {}

export const UserInfo = ({
  company,
  blog,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconBlog />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
