import classes from "./style/StepSixNewAd.module.scss";
import { UserEdit } from "iconsax-react";
import BaseButton from "../base/BaseButton";
import { useTranslation } from "@/providers/locale-provider";
import { useDispatch, useSelector } from "react-redux";
import { advertisementActions } from "@/store/advertisement-slice";
import BaseInput from "../base/BaseInput";
import BaseTextarea from "../base/BaseTextarea";
import ImageUploader from "../core/ImageUploader";
import { useState } from "react";
import Modal from "../base/Modal";
import AdvertisementSuccessNotif from "./AdvertisementSuccessNotif";
import { loadingActions } from "@/store/loading-slice";
import WarningNotif from "@/core/helpers/WarningNotif";
import { RootState } from "@/store";
import { RepoFactory } from "@/baseRepository/Factory";
import { AxiosError, AxiosResponse } from "axios";
import { errorActions } from "@/store/error-slice";
const advertisementRepository = () => RepoFactory.get("advertisement");

const StepSixNewAd = () => {
  const { t9n } = useTranslation();
  const dispatch = useDispatch();
  const [warningFlag, setWarningFlag] = useState<boolean>(false);
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [quota, setQuota] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [errors, setErrors] = useState({
    nickname: false,
    lastName: false,
    quota: false,
    nationalId: false,
  });
  const newAd = useSelector(
    (state: RootState) => state.advertisement.advertisement
  );
  const inputOnChangeHandler = (field: string, e: any) => {
    switch (field) {
      case "nickname":
        setNickname(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "fatherName":
        setFatherName(e.target.value);
        break;
      case "quota":
        setQuota(e.target.value);
        break;
      case "nationalId":
        setNationalId(e.target.value);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {
      nickname: nickname.length === 0,
      lastName: lastName.length === 0,
      quota: quota.length === 0,
      nationalId: nationalId.length === 0,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const resetInfo = () => {
    setErrors({
      nickname: false,
      lastName: false,
      quota: false,
      nationalId: false,
    });
  };

  const formDataFiller = () => {
    if (!validateForm()) {
      return;
    } else {
      let body = {
        ownerFirstName: nickname,
        ownerLastName: lastName,
        ownerFatherName: fatherName,
        quota: quota,
        ownerNationalId: nationalId,
      };
      dispatch(loadingActions.setHasLoading(true));
      dispatch(advertisementActions.setStepSixData(body));
      setWarningFlag(true);
      setTimeout(() => {
        dispatch(loadingActions.setHasLoading(false));
      }, 500);
    }
  };

  const modalExitHandler = (status: boolean) => {
    return setModalFlag(status);
  };
  const WarningExitHandler = (status: boolean) => {
    return setWarningFlag(status);
  };
  const createAdvertisement = () => {
    dispatch(loadingActions.setHasLoading(true));
    advertisementRepository()
      .createAdvertisement()
      .then((res: AxiosResponse<any>) => {})
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          dispatch(errorActions.setHasError(true));
          dispatch(errorActions.setError(error.response?.data));
        }
      })
      .finally(() => {
        dispatch(loadingActions.setHasLoading(false));
        setWarningFlag(false);
      });
  };
  return (
    <div className={classes.formLayout}>
      <div className={classes.formBody}>
        <div className={classes.formContainer}>
          <div className={classes.detailsBox}>
            <div className={classes.detailHeader}>
              <span className={classes.detailHeaderTitle}>
                {t9n.insert_owner_information}
              </span>
              <UserEdit className={classes.detailHeaderIcon} />
            </div>
            <div className={" bg-white " + classes.details}>
              {/* nickname */}
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>{t9n.nickname}</span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.nickname}
                    name={"nickname"}
                    handleChange={(e) => {
                      inputOnChangeHandler("nickname", e);
                    }}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>

              {/* lastName */}
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>{t9n.lastName}</span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.lastName}
                    name={"lastName"}
                    handleChange={(e) => {
                      inputOnChangeHandler("lastName", e);
                    }}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>

              {/* fatherName */}
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>
                    {t9n.father_name}
                  </span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.father_name}
                    name={"fatherName"}
                    handleChange={(e) => {
                      inputOnChangeHandler("fatherName", e);
                    }}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>
              {/* quota */}
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>{t9n.quota}</span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.quota}
                    name={"quota"}
                    handleChange={(e) => {
                      inputOnChangeHandler("quota", e);
                    }}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>
              {/* idNumber */}
              <div className={" bg-Pale-White " + classes.featureCard}>
                <div className={" flex items-start w-1/3 "}>
                  <span className={classes.featureTitle}>{t9n.idNumber}</span>
                </div>
                <div className={" flex items-start w-2/3 "}>
                  <BaseInput
                    placeholder={t9n.idNumber}
                    name={"idNumber"}
                    handleChange={(e) => {
                      inputOnChangeHandler("nationalId", e);
                    }}
                    type="text"
                    underlineBorder={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <ImageUploader title={t9n.owner_idcard_picture} />
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
            title={t9n.register}
            color="primary"
            hasBlock={true}
            onClickHandler={() => {
              formDataFiller();
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
      {warningFlag && (
        <Modal
          exitAction={WarningExitHandler}
          body={
            <WarningNotif
              type="create"
              title="از اطلاعات وارده اطمینان دارید ؟"
              onClose={WarningExitHandler}
              onSubmit={() => createAdvertisement()}
            />
          }
        />
      )}
      {modalFlag && (
        <Modal
          exitAction={modalExitHandler}
          body={<AdvertisementSuccessNotif onClose={modalExitHandler} />}
        />
      )}
    </div>
  );
};
export default StepSixNewAd;
