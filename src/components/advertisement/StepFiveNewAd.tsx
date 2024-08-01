import classes from "./style/StepFiveNewAd.module.scss";
import { Book } from "iconsax-react";
import BaseButton from "../base/BaseButton";
import { useTranslation } from "@/providers/locale-provider";
import { useDispatch } from "react-redux";
import { advertisementActions } from "@/store/advertisement-slice";
import BaseInput from "../base/BaseInput";
import BaseTextarea from "../base/BaseTextarea";
import ImageUploader from "../core/ImageUploader";
const StepFiveNewAd = () => {
  const { t9n } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={classes.formLayout}>
      <div className={classes.formBody}>
        <div className={classes.formContainer}>
          <div className={classes.detailsBox}>
            <div className={classes.detailHeader}>
              <span className={classes.detailHeaderTitle}>
                {t9n.insert_property_info}
              </span>
              <Book className={classes.detailHeaderIcon} />
            </div>
            <div className={" bg-white " + classes.details}>
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>
                    {t9n.neighbourhood}
                  </span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.neighbourhood}
                    name="neighbourhood"
                    handleChange={(e) => {}}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>

              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>
                    {t9n.description}
                  </span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseTextarea placeholder={t9n.description} rows={10} />
                </div>
              </div>
            </div>
          </div>
          <ImageUploader title={t9n.owenership_picture} />
        </div>
        <div className={classes.footer}>
          <BaseButton
            size="lg"
            square={true}
            title={t9n.back}
            color="outline"
            hasBlock={true}
            onClickHandler={() =>
              dispatch(advertisementActions.setNewAdStep(4))
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
      <div className={classes.previewBox}>
        <BaseButton
          title={t9n.advertisement_preview}
          color="white"
          onClickHandler={() => {
            dispatch(advertisementActions.setNewAdStep(6));
          }}
        />
      </div>
    </div>
  );
};
export default StepFiveNewAd;
