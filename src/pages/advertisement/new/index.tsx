import classes from "./style/CreateNewAdvertisement.module.scss";
import LayoutWithoutFooter from "@/view/layout/LayoutWithoutFooter";
import BaseToolbar from "@/components/base/BaseToolbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import StepOneNewAdd from "@/components/advertisement/StepOneNewAd";
import StepTwoNewAdd from "@/components/advertisement/StepTwoNewAd";
import StepThreeNewAd from "@/components/advertisement/StepThreeNewAd";
import StepFourNewAd from "@/components/advertisement/StepFourNewAd";
import StepFiveNewAd from "@/components/advertisement/StepFiveNewAd";
import StepSixNewAd from "@/components/advertisement/StepSixNewAd";
const CreateNewAdvertisement = () => {
  const currentStep = useSelector(
    (state: RootState) => state.advertisement.newAddStep
  );
  return (
    <LayoutWithoutFooter>
      <div className={classes.CreateNewAdvertisement}>
        <BaseToolbar stepCount={6} currentStep={currentStep} />
        {currentStep === 1 && <StepOneNewAdd />}
        {currentStep === 2 && <StepTwoNewAdd />}
        {currentStep === 3 && <StepThreeNewAd />}
        {currentStep === 4 && <StepFourNewAd />}
        {currentStep === 5 && <StepFiveNewAd />}
        {currentStep === 6 && <StepSixNewAd />}
      </div>
    </LayoutWithoutFooter>
  );
};

export default CreateNewAdvertisement;
