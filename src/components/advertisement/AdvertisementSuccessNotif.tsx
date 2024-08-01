import classes from "./style/AdvertisementSuccessNotif.module.scss";
import { useTranslation } from "@/providers/locale-provider";
import BaseButton from "../base/BaseButton";
interface MyComponent {
  onClose: (statuse: boolean) => void;
}
const AdvertisementSuccessNotif = (props: MyComponent) => {
  const { t9n } = useTranslation();
  const closeHandler = () => {
    if (props.onClose) return props.onClose(false);
  };
  return (
    <div className={" bg-white " + classes.notifLayout}>
      <div className={" flex h-3/4 w-full p-3 items-center justify-center"}>
        <span className={classes.notifTitle}>{t9n.advertisementSuccess}</span>
      </div>
      <div className={" flex h-1/4 w-full p-3 items-center justify-center "}>
        <BaseButton
          size="lg"
          square={true}
          title={t9n.ok}
          color="primary"
          onClickHandler={() => {
            closeHandler();
          }}
        />
      </div>
    </div>
  );
};
export default AdvertisementSuccessNotif;
