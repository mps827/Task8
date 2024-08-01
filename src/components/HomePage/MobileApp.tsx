import classes from './style/MobileApp.module.scss'
import Image from "next/image";
import phoneImage from "../../assets/images/iPhone 15.png";
import vector from "../../assets/images/Vector 9.svg";
import vectorBlue from "../../assets/images/Vector 9 (1).svg";
import { useTranslation } from "@/providers/locale-provider";
const MobileApp = () => {
    const { t9n } = useTranslation();
    return (
        <div className={classes.mobileApp}>
            <div className={classes.backgroundImage}>
            </div>
            <Image className={classes.image}
                src={phoneImage}
                alt="phone image" />
            <div className={classes.firstText}>
                <h1 className={classes.fText}>
                    {t9n.first_text_mobile_app}
                </h1>
            </div>
            <div className={classes.vector}>
                <Image className={classes.vectorImage}
                    src={vector}
                    alt="vector" />
            </div>
            <div className={classes.secondText}>
                <h1 className={classes.sText}>
                    {t9n.second_text_mobile_app}
                </h1>
            </div>
            <div className={classes.sVector}>
                <Image className={classes.vectorImage}
                    src={vectorBlue}
                    alt="vector" />
            </div>
        </div>
    )
}
export default MobileApp