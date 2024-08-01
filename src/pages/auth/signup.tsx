import classes from "./style/SignUp.module.scss";
import AuthLayout from "@/view/layout/AuthLayout";
import locked from "../../assets/images/locked 1.png";
import Image from "next/image";
import { Minus } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import dynamic from "next/dynamic";
const SignUpForm = dynamic(import("@/components/auth/SignUpForm"), {
  ssr: false,
});
const SignUp = () => {
  const { t9n } = useTranslation();
  return (
    <AuthLayout>
      <div className={classes.signUpForm + " bg-Semi-Black"}>
        <div className={classes.lockSection + " bg-White"}>
          <h1>
            <span className="text-Black text-2xl">متاپینگ پلتفرمی </span>
            <span className="text-Blue-Primary text-2xl">امن</span>
          </h1>
          <div className={classes.lock + " bg-White"}></div>
          <Image className={classes.image} src={locked} alt="locked image" />
          <div className="flex flex-row gap-1 justify-center items-center">
            <span className="text-Black text-xl">
              {t9n.Terms_and_Conditions}
            </span>
            <Minus className={classes.icon} />
            <span className="text-Black text-xl">{t9n.Support}</span>
          </div>
        </div>
        <SignUpForm />
      </div>
    </AuthLayout>
  );
};
export default SignUp;
