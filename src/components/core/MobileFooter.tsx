import classes from "./style/MobileFooter.module.scss";
import { useTranslation } from "@/providers/locale-provider";
import { Profile, Message, Menu, Home2, Category, Add } from "iconsax-react";
const MobileFooter = () => {
  const { t9n } = useTranslation();
  return (
    <div className={classes.footerLayout}>
      <div className={classes.footerMenu}>
        <div className={classes.menuBox}>
          <div className={classes.menuSection}>
            <div className={classes.menuItem}>
              <Profile className={classes.icon} />
              <span className={classes.itemTitle}>{t9n.my_account}</span>
            </div>
            <div className={classes.menuItem}>
              <Message className={classes.icon} />
              <span className={classes.itemTitle}>{t9n.chat}</span>
            </div>
          </div>
          <div className={classes.menuSection}>
            <div className={classes.menuItem}>
              <Category className={classes.icon} />
              <span className={classes.itemTitle}>{t9n.categories}</span>
            </div>
            <div className={classes.menuItem}>
              <Home2 className={classes.icon} />
              <span className={classes.itemTitle}>{t9n.advertisments}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={" bg-blue-700 " + classes.addButton}>
        <Add className={" text-white " + classes.addIcon} />
      </div>
    </div>
  );
};
export default MobileFooter;
