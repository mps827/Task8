import LayoutWithoutFooter from "@/view/layout/LayoutWithoutFooter";
import classes from "./style/jam.module.scss";
import JamImg from "@/assets/images/jam.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "@/providers/locale-provider";
import Link from "next/link";
const Jam = () => {
  return (
    <LayoutWithoutFooter>
      <div className={classes.formLayout}>
        <div className={classes.formBox + " bg-Withe-45 dark:bg-Nero"}>
          <div className={classes.formTitle}>
            پیدا کردن موقعیت دقیق روی نقشه با استفاده از کد جام درج شده رو سند.
          </div>
          <Image alt="jam" src={JamImg} className={classes.jamImg} />
          <Link href="/jam" className={classes.buttonBox}>
            متوجه شدم
          </Link>
        </div>
      </div>
    </LayoutWithoutFooter>
  );
};
export default Jam;
