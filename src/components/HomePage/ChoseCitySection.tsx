import classes from "./style/ChoseCitySection.module.scss";
import { useTranslation } from "@/providers/locale-provider";
import Image from "next/image";
import apartment from "../../assets/images/highways-high-rise-buildings-fuzhou-fujian-province-china_91566-1140 1.png";
import BaseInput from "../../components/base/BaseInput";
import { SearchNormal1 } from "iconsax-react";
const ChoseCitySection = () => {
  const { t9n } = useTranslation();
  const SearchIcon = () => {
    return <SearchNormal1 />;
  };
  return (
    <div className={classes.ChoseCitySection}>
      <Image className={classes.image} src={apartment} alt="apartment" />
      <div className={classes.selectBoxSection}>
        <div className="flex flex-col">
          <h1 className={classes.metaPing + " text-White"}>{t9n.meta_ping}</h1>
          <h2 className={classes.branding + " text-Dark-Grey"}>{t9n.brand}</h2>
        </div>
        <div className={"flex flex-col gap-3 text-Black " + classes.searchCity}>
          <label className={classes.search} htmlFor="chose city">
            {t9n.chose_city}
          </label>
          <BaseInput
            name="search"
            size="lg"
            placeholder={t9n.city_search_box}
            leftIcon={SearchIcon()}
          />
        </div>
      </div>
    </div>
  );
};
export default ChoseCitySection;
