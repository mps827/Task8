import classes from "./style/LoginFooter.module.scss";
import { Instagram, Send2, Youtube } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
const LoginFooter = () => {
  const { t9n } = useTranslation();
  return (
    <div className="flex flex-row justify-around py-4 items-center">
      <div className="flex flex-row-reverse gap-2 items-center">
        <Send2 className={classes.footerIcon} />
        <span>metaping.org</span>
      </div>
      <div className="flex flex-row-reverse gap-2 items-center">
        <Instagram className={classes.footerIcon} />
        <span>metaping.org</span>
      </div>
      <div className="flex flex-row-reverse gap-2 items-center">
        <Youtube className={classes.footerIcon} />
        <span>metaping.org</span>
      </div>
    </div>
  );
};

export default LoginFooter;
