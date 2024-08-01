import DefaultLayout from "@/view/layout/DefaultLayout";
import classes from "./style/AdvertisementDetail.module.scss";
import AdvertisementImage from "../../assets/images/advertisement.png";
import Image from "next/image";
import BaseButton from "@/components/base/BaseButton";
import { useDispatch } from "react-redux";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "@/store/error-slice";
import { useParams } from "next/navigation";
import {
  Messages3,
  ArchiveAdd,
  Link2,
  UsdCoin,
  Ruler,
  House2,
  Fatrows,
  InfoCircle,
} from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import { RepoFactory } from "@/baseRepository/Factory";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { AdvertisementType } from "@/types/sharedTypes";
const advertisementRepository = () => RepoFactory.get("advertisement");

const AdvertisementDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t9n } = useTranslation();
  const MessageIcon = () => {
    return <Messages3 />;
  };
  const [selectedAdivertisement, setSelectedAdvertisement] =
    useState<AdvertisementType>();
  const getAdvertisement = async (id: string) => {
    dispatch(loadingActions.setHasLoading(true));
    await advertisementRepository()
      .getAdvertisement(id)
      .then((res: AxiosResponse<any>) => {
        setSelectedAdvertisement(res.data);
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          dispatch(errorActions.setHasError(true));
          dispatch(errorActions.setError(error.response?.data));
        }
      })
      .finally(() => {
        dispatch(loadingActions.setHasLoading(false));
      });
  };
  useEffect(() => {
    getAdvertisement("1");
  }, []);
  return (
    <DefaultLayout>
      <div
        className={classes.AdvertisementDetail + " bg-Pale-White dark:bg-Nero"}
      >
        <div className={classes.blueCircle}></div>
        <div className={"container mx-auto flex flex-row " + classes.content}>
          <div className={classes.infoSide}>
            <div className="flex flex-col gap-3">
              <h1 className={classes.title}>
                112 متر نوساز کلید نخورده ، ساری
              </h1>
              <h3 className={classes.subTitle}>
                نیم ساعت پیش در تهران ؛ سهروردی
              </h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex gap-4 items-center">
                <BaseButton title={t9n.Contacts} color="primary"></BaseButton>
                <BaseButton
                  title={t9n.chat}
                  RightIcon={MessageIcon()}
                ></BaseButton>
              </div>
              <div className="flex gap-4 items-center">
                <ArchiveAdd />
                <Link2 />
              </div>
            </div>
            <div className={classes.detailItemList}>
              <div
                className={
                  classes.detailItem + " bg-White dark:bg-Raisin-Black"
                }
              >
                <UsdCoin />
                <label> {t9n.Total_price} :</label>
                <span>24,000,000,000 تومان</span>
              </div>
              <div
                className={
                  classes.detailItem + " bg-White dark:bg-Raisin-Black"
                }
              >
                <Ruler />
                <label>{t9n.Price_per_meter} :</label>
                <span>23,000,000,000 تومان</span>
              </div>
              <div
                className={
                  classes.detailItem + " bg-White dark:bg-Raisin-Black"
                }
              >
                <House2 />
                <label>{t9n.real_estate_agency} :</label>
                <span>املاک ایوان</span>
              </div>
              <div
                className={
                  classes.detailItem + " bg-White dark:bg-Raisin-Black"
                }
              >
                <Fatrows />
                <label>{t9n.Floor} :</label>
                <span>۳ از ۶</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className={classes.label}>
                <label htmlFor="">{t9n.Features_services}</label>
              </div>
              <div className="flex flex-row justify-start gap-5">
                <div
                  className={
                    classes.services + " bg-White dark:bg-Raisin-Black"
                  }
                >
                  انباری
                </div>
                <div
                  className={
                    classes.services + " bg-White dark:bg-Raisin-Black"
                  }
                >
                  انباری
                </div>
                <div
                  className={
                    classes.services + " bg-White dark:bg-Raisin-Black"
                  }
                >
                  انباری
                </div>
              </div>
            </div>
          </div>
          <div className={classes.imageSide + " bg-White dark:bg-Raisin-Black"}>
            <div className={classes.image}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div
            className={classes.imagesSection + " bg-White dark:bg-Raisin-Black"}
          >
            <div className={classes.imageItem}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
            <div className={classes.imageItem}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
            <div className={classes.imageItem}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
            <div className={classes.imageItem}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
            <div className={classes.imageItem}>
              <Image src={AdvertisementImage} alt="advertisement image" />
            </div>
          </div>
          <div className="flex flex-col pb-40 gap-8">
            <div className={classes.label}>
              <label htmlFor="">{t9n.description}</label>
            </div>
            <div className="flex  flex-row gap-4">
              <InfoCircle className="text-Blue-Primary" />
              <p>3 خوابه 1 خواب مستر</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default AdvertisementDetail;
