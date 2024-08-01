import classes from "./style/MyAdertisementCard.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useTranslation } from "@/providers/locale-provider";
import BaseButton from "../base/BaseButton";
import { useRouter } from "next/router";
import { AdvertisementType } from "@/types/sharedTypes";
import * as shamsi from "shamsi-date-converter";
import { ArrowDown2, Lamp, LampCharge, Ruler, TableLamp } from "iconsax-react";
interface myComponentProps {
  advertisement: AdvertisementType;
  image: string | StaticImageData;
  size?: string | "sm";
}
const MyAdvertismentCard = (props: myComponentProps) => {
  const { t9n } = useTranslation();
  const router = useRouter();
  const getShamsiDate = () => {
    let gergorianDate = props.advertisement.createdAt?.split("T")[0];
    if (gergorianDate && gergorianDate?.length > 0) {
      let dateFormat = gergorianDate?.replace("-", "/");
      return shamsi.gregorianToJalali(dateFormat).join("/");
    }
    return "";
  };
  const ArrowDownIcon = () => {
    return <ArrowDown2 />;
  };
  console.log(props.advertisement);

  return (
    <>
      {props.size === "sm" && (
        <div className={classes.card + " bg-White dark:bg-Raisin-Black"}>
          <div
            className={
              " flex flex-row items-center justify-center w-full " +
              classes.image
            }
            onClick={() => {
              router.push(`/advertisement/id:${props.advertisement.id}`);
            }}
          >
            <Image src={props.image} alt="advertisement image" />
          </div>
          <div className={" flex flex-col w-full "}>
            <div className=" flex items-center justify-start w-full ">
              <h1 className={classes.title}>
                {t9n.title} : {props.advertisement.title}
              </h1>
            </div>
            <div className={" flex items-center justify-end w-full "}>
              <BaseButton
                title={t9n.advetisement_management}
                size="sm"
                square={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className={classes.publishTime}>
              <span>{t9n.publish_time} : </span>
              <span>{getShamsiDate()}</span>
            </div>
            <div className={classes.detail}>
              <div className="flex flex-row gap-1">
                <span>{t9n.advetisement_status} : </span>
                <span>
                  {props.advertisement.publishStatus === "1"
                    ? "در انتظار تایید"
                    : props.advertisement.publishStatus === "2"
                    ? "منتشر شده"
                    : "منقضی شده"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.size === "lg" && (
        <div
          className={
            " flex flex-row gap-1 items-start  rounded-2xl p-2 bg-white w-full "
          }
        >
          <div className={" w-3/4 p-2 " + classes.largeDetialBox}>
            <div className={classes.detailHeader}>
              <div className={classes.headerAction}>
                <BaseButton
                  color="primary"
                  size="sm"
                  title={t9n.more}
                  LeftIcon={ArrowDownIcon()}
                  onClickHandler={() => {}}
                />
                <div className={" flex flex-row items-center gap-3 "}>
                  <span className={classes.adsTitle}>
                    {props.advertisement.title}
                  </span>
                  <span>-</span>
                  <span></span>
                </div>
              </div>
              <div
                className={
                  " flex flex-row items-center justify-end gap-4 w-full "
                }
              >
                <div className={" flex flex-row items-center gap-1 "}>
                  <Ruler
                    className={
                      " flex w-5 h-5  items-center text-slate-400 dark:text-white "
                    }
                  />
                  <span
                    className={
                      " text-slate-400 dark:text-white " +
                      classes.headerDetialText
                    }
                  >{`${props.advertisement.space} ${t9n.meter}`}</span>
                </div>
                <div className={" flex flex-row items-center gap-1 "}>
                  <TableLamp
                    className={
                      " flex w-5 h-5  items-center text-slate-400 dark:text-white "
                    }
                  />
                  <span
                    className={
                      " text-slate-400 dark:text-white " +
                      classes.headerDetialText
                    }
                  >{`${props.advertisement.room} ${t9n.rooms}`}</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-row items-center justify-between w-full">
              <div className=" flex flex-row items-center justify-center gap-2 ">
                <span
                  className={
                    " text-slate-400 dark:text-white " + classes.publishDateText
                  }
                >
                  {t9n.publish_time} :
                </span>
                <span
                  className={
                    " text-slate-400 dark:text-white " + classes.publishDateText
                  }
                >
                  {getShamsiDate()}
                </span>
              </div>
              <span className={" text-Blue-Primary " + classes.priceText}>
                5,400,000,000
              </span>
            </div>
          </div>
          <Image
            className=" flex w-1/4  "
            src={props.image}
            alt="advertisement image"
            onClick={() => {
              router.push(`/advertisement/id:${props.advertisement.id}`);
            }}
          />
        </div>
      )}
    </>
  );
};
export default MyAdvertismentCard;
