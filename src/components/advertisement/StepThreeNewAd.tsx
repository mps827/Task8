import classes from "./style/StepThreeNewAd.module.scss";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { useTranslation } from "@/providers/locale-provider";
import { advertisementActions } from "@/store/advertisement-slice";
import BaseButton from "../base/BaseButton";
import BaseInput from "../base/BaseInput";
import BaseTextarea from "../base/BaseTextarea";
import { RootState } from "@/store";
import ImageUploader from "../core/ImageUploader";
import { loadingActions } from "@/store/loading-slice";
import { useState } from "react";
const StepThreeNewAd = () => {
  const dispatch = useDispatch();
  const { t9n, updateLocale } = useTranslation();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState({
    title: false,
  });
  const selectedCategory = useSelector(
    (state: RootState) => state.advertisement.propertyType
  );

  const inputOnChangeHandler = (field: string, e: any) => {
    switch (field) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {
      title: title.length === 0,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const resetInfo = () => {
    setErrors({
      title: false,
    });
  };

  const formDataFiller = () => {
    if (!validateForm()) {
      return;
    } else {
      let body = {
        title: title,
        description: description,
      };
      dispatch(loadingActions.setHasLoading(true));
      dispatch(advertisementActions.setStepThreeData(body));
      setTimeout(() => {
        dispatch(loadingActions.setHasLoading(false));
        dispatch(advertisementActions.setNewAdStep(4));
      }, 500);
    }
  };

  return (
    <div className={" bg-Pale-White " + classes.formLayout}>
      <div className={"flex flex-row items-center gap-20  "}>
        <div className={" bg-white  " + classes.detailBox}>
          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.neighbourhood}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseInput
                placeholder={t9n.title}
                name="title"
                handleChange={(e) => {
                  inputOnChangeHandler("title", e);
                }}
                type="text"
                underlineBorder={true}
              />
            </div>
          </div>
          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.description}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseTextarea
                placeholder={t9n.description}
                rows={10}
                handleChange={(e) => inputOnChangeHandler("description", e)}
              />
            </div>
          </div>
        </div>
        <div className={" w-1/2 flex flex-col justify-end "}>
          <ImageUploader title={t9n.advertisement_picture} />
        </div>
      </div>
      <div className={classes.footer}>
        <BaseButton
          size="lg"
          square={true}
          title={t9n.back}
          color="outline"
          hasBlock={true}
          onClickHandler={() => dispatch(advertisementActions.setNewAdStep(2))}
        />
        <BaseButton
          size="lg"
          square={true}
          title={t9n.continue}
          color="primary"
          hasBlock={true}
          onClickHandler={() => {
            formDataFiller();
          }}
        />
      </div>
    </div>
  );
};
export default StepThreeNewAd;
