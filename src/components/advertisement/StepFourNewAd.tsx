import classes from "./style/StepFourNewAd.module.scss";
import { Category } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import BaseLocationPicker from "../base/BaseLocationPicker";
import BaseButton from "../base/BaseButton";
import { advertisementActions } from "@/store/advertisement-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
const StepFourNewAd = () => {
  const dispatch = useDispatch();
  const { t9n } = useTranslation();
  const advertisement = useSelector(
    (state: RootState) => state.advertisement.advertisement
  );
  console.log(advertisement);

  return (
    <div className={classes.formLayout}>
      <div
        className={
          " flex flex-col  items-center justify-center gap-8 " +
          classes.locationBox
        }
      >
        <div className={"flex flex-row gap-3 items-center"}>
          <Category className={classes.icon} />
          <h1 className={classes.headerTitle}>
            {t9n.location + " "}
            {t9n.apartment}
          </h1>
        </div>
        <BaseLocationPicker />
        <div className={classes.footer}>
          <BaseButton
            size="lg"
            square={true}
            title={t9n.back}
            color="outline"
            hasBlock={true}
            onClickHandler={() =>
              dispatch(advertisementActions.setNewAdStep(3))
            }
          />
          <BaseButton
            size="lg"
            square={true}
            title={t9n.continue}
            color="primary"
            hasBlock={true}
            onClickHandler={() => {
              dispatch(advertisementActions.setNewAdStep(6));
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default StepFourNewAd;
