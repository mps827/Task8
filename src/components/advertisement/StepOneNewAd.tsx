import classes from "./style/StepOneNewAd.module.scss";
import { useTranslation } from "@/providers/locale-provider";
import { ArrowSquareLeft } from "iconsax-react";
import { Category } from "iconsax-react";
import BaseButton from "@/components/base/BaseButton";
import { advertisementActions } from "@/store/advertisement-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store";
const StepOneNewAdd = () => {
  const { t9n, updateLocale } = useTranslation();
  const dispatch = useDispatch();
  const [adCategories, setAdCategories] = useState<string[]>([
    "apartment",
    "villa",
    "store",
    "land",
    "dilapidated_properties",
  ]);
  const selectedCategory = useSelector(
    (state: RootState) => state.advertisement.advertisement.propertyType
  );
  const dataSwitch = (category: string) => {
    switch (category) {
      case "apartment":
        return t9n.apartment;
      case "villa":
        return t9n.villa;
      case "store":
        return t9n.store;
      case "land":
        return t9n.land;
      case "dilapidated_properties":
        return t9n.dilapidated_properties;
      default:
        break;
    }
  };
  return (
    <>
      <div className={classes.adBox}>
        <div className={"flex flex-row gap-3 items-center"}>
          <Category className={classes.icon} />
          <h1 className={classes.headerTitle}>{t9n.categories}</h1>
        </div>
        <div className={"bg-white " + classes.categoryBox}>
          {adCategories.map((category, index) => {
            return (
              <div
                key={index}
                className={
                  (selectedCategory === category
                    ? " bg-Blue-Primary text-white "
                    : "bg-Pale-White ") + classes.categoryCard
                }
                onClick={() => {
                  dispatch(advertisementActions.setPropertyType(category));
                }}
              >
                <span className={classes.cardTitle}>
                  {dataSwitch(category)}
                </span>
                <ArrowSquareLeft
                  className={"flex w-32px h-32px  justify-center items-center "}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.footer}>
          <BaseButton
            size="lg"
            square={true}
            title={t9n.continue}
            color="primary"
            hasBlock={true}
            onClickHandler={() => {
              if (selectedCategory) {
                dispatch(advertisementActions.setNewAdStep(2));
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
export default StepOneNewAdd;
