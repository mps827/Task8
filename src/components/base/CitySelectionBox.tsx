import { useTranslation } from "@/providers/locale-provider";
import classes from "./style/CitySelectionBox.module.scss";
import BaseInput from "./BaseInput";
import { useState } from "react";
import Background from "../../assets/images/highways-high-rise-buildings-fuzhou-fujian-province-china_91566-1140 1.png";
import { ArrowLeft2 } from "iconsax-react";
const CitySelectionBox = () => {
  const { t9n, updateLocale } = useTranslation();
  const [favoriteCities, setFavoriteCities] = useState<string[]>([
    "تبریز",
    "کرمان",
    "رشت",
    "بیرجند",
    "هرمزگان",
    "قشم",
    "شیراز",
  ]);
  return (
    <div className={" bg-white " + classes.cityLayout}>
      <div className={" w-1/2 " + classes.formBox}>
        <div className={" flex flex-col items-start gap-3 w-full  "}>
          <span className={classes.formHeader}>{t9n.chose_city}</span>
          <div className=" flex flex-col gap-1 w-full self-stretch  ">
            <span className={classes.label}>
              شهر خود را در کادر زیر وارد نمایید.
            </span>
            <BaseInput name="search" placeholder={`${t9n.example}: تهران`} />
          </div>
        </div>
        <div className={" flex flex-col items-start gap-3 self-stretch "}>
          <span className={classes.label}>شهر های پر بازدید</span>
          <div className=" flex  flex-row flex-wrap  w-full items-center justify-start">
            {favoriteCities.map((city, index) => {
              return (
                <span
                  key={index}
                  className={" w-1/3 p-1 text-Blue-Primary " + classes.cityName}
                >
                  {city}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className={" w-1/2 h-full p-3 " + classes.menuBox}>
        <div
          className={
            " flex items-start justify-between w-full border-b-2 border-b-solid border-b-white p-2 cursor-pointer "
          }
        >
          <span className={" text-white " + classes.menuItem}>تهران</span>
          <ArrowLeft2 className=" w-6 h-6 items-center text-white " />
        </div>
      </div>
    </div>
  );
};
export default CitySelectionBox;
