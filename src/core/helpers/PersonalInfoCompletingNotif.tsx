import classes from "./style/PersonalInfoCompletingNotif.module.scss";
import { useTranslation } from "@/providers/locale-provider";
import BaseButton from "@/components/base/BaseButton";
import { ArrowRight2 } from "iconsax-react";
interface MyComponent {
  onClose: (statuse: boolean) => void;
}
const PersonalInfoCompletingNotif = (props: MyComponent) => {
  const { t9n } = useTranslation();
  const btnIcon = () => {
    return <ArrowRight2 className={classes.btnIcon} />;
  };
  const closeHandler = () => {
    if (props.onClose) return props.onClose(false);
  };
  return (
    <div className={" bg-white " + classes.notifLayout}>
      <div className={" flex h-3/4 w-full p-3 items-center justify-center"}>
        <span className={classes.notifTitle}>{t9n.personalInfoCompletin}</span>
      </div>
      <div
        className={
          " flex flex-row h-1/4 w-full p-3 items-center justify-center gap-8 "
        }
      >
        <BaseButton
          size="lg"
          square={true}
          title={t9n.continue}
          color="primary"
          onClickHandler={() => {
            closeHandler();
          }}
          RightIcon={btnIcon()}
        />
        <BaseButton
          size="lg"
          square={true}
          title={t9n.close}
          onClickHandler={() => {
            closeHandler();
          }}
        />
      </div>
    </div>
  );
};
export default PersonalInfoCompletingNotif;
