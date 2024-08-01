import classes from "./style/ProfileAdvertisement.module.scss";
import { Eye, Note, Note1 } from "iconsax-react";
import MyAdvertismentCard from "./MyAdvertisementCard";
import AdvertisementImage from "../../assets/images/advertisement.png";
import { useEffect, useState } from "react";
import { AdvertisementType } from "@/types/sharedTypes";
import { useDispatch } from "react-redux";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "@/store/error-slice";
import { RepoFactory } from "@/baseRepository/Factory";
import { AxiosError, AxiosResponse } from "axios";
const advertisementRepository = () => RepoFactory.get("advertisement");

interface MyComponentProps {
  title: string;
}
const ProfileAdvertisements = (props: MyComponentProps) => {
  const dispatch = useDispatch();
  const [advertisementList, setAdvertisementList] = useState<
    AdvertisementType[]
  >([]);
  const getAllAdvertisements = async () => {
    dispatch(loadingActions.setHasLoading(true));
    await advertisementRepository()
      .getAllAdvertisement()
      .then((res: AxiosResponse<any>) => {
        console.log(res.data);

        setAdvertisementList(res.data);
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
    getAllAdvertisements();
  }, []);
  return (
    <div className={classes.adsLayout}>
      <div className={classes.header}>
        <Note className={"text-black dark:text-white " + classes.headerIcon} />
        <span className={classes.headerTitle}>{props.title}</span>
      </div>
      <div className={classes.cardBox}>
        {advertisementList?.length > 0 &&
          advertisementList.map(
            (advertisement: AdvertisementType, index: number) => {
              return (
                <MyAdvertismentCard
                  size="lg"
                  key={index}
                  advertisement={advertisement}
                  image={AdvertisementImage}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
export default ProfileAdvertisements;
