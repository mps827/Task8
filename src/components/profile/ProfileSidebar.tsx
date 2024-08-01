import classes from "./style/ProfileSidebar.module.scss";
import {
  Profile,
  Notepad2,
  Save2,
  Eye,
  MessageQuestion,
  InfoCircle,
  TagCross,
  Facebook,
  Instagram,
  Youtube,
  Send2,
  UserAdd,
} from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import { useState } from "react";
import { title } from "process";
const ProfileSidebar = () => {
  const { t9n } = useTranslation();
  const [sidebarItems, setSidebarItems] = useState([
    {
      icon: (
        <Notepad2
          className={" text-black dark:text-white " + classes.itemIcon}
        />
      ),
      title: t9n.my_ads,
    },
    {
      icon: (
        <Save2 className={" text-black dark:text-white " + classes.itemIcon} />
      ),
      title: t9n.saved,
    },
    {
      icon: (
        <Eye className={" text-black dark:text-white " + classes.itemIcon} />
      ),
      title: t9n.recently_viewed,
    },
    {
      icon: (
        <MessageQuestion
          className={" text-black dark:text-white " + classes.itemIcon}
        />
      ),
      title: t9n.privacy_police,
    },
    {
      icon: (
        <InfoCircle
          className={" text-black dark:text-white " + classes.itemIcon}
        />
      ),
      title: t9n.about_smartwest,
    },
  ]);
  return (
    <div className={" bg-white " + classes.sidebarLayout}>
      <div className={classes.profileInfo}>
        <div className={classes.usernameBox}>
          <Profile
            className={
              " text-white bg-slate-400 border-2 border-slate-400 " +
              classes.userIcon
            }
          />
          <div className={classes.userDetail}>
            <span className={" text-black dark:text-white " + classes.username}>
              {t9n.my_account}
            </span>
            <span
              className={" text-slate-400 dark:text-white" + classes.userNumber}
            >
              {"09117540145"}
            </span>
          </div>
        </div>
      </div>
      <div className={" bg-Grey-500 " + classes.itemBox}>
        {sidebarItems.map((item, index) => {
          return (
            <div key={index} className={classes.sidebarItem}>
              {item.icon}
              <span className={classes.itemTitle}>{item.title}</span>
            </div>
          );
        })}
        <div className=" w-full items-center justify-center ">
          <div
            className={" bg-slate-600 dark:bg-white " + classes.divider}
          ></div>
        </div>
        <div className={classes.sidebarItem}>
          <UserAdd
            className={"  text-black dark:text-white " + classes.itemIcon}
          />
          <span className={classes.itemTitle}>{t9n.invite_user}</span>
        </div>
        <div className={classes.sidebarItem}>
          <TagCross
            className={"  text-black dark:text-white " + classes.itemIcon}
          />
          <span className={classes.itemTitle}>{t9n.exit}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileSidebar;
