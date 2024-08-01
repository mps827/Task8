import classes from "./style/AuthLayout.module.scss";
import LoginFooter from "../../components/core/LoginFooter";
import loginPageImage from "../../assets/images/loginPageImage.png";
import MobileFooter from "@/components/core/MobileFooter";
import Image from "next/image";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactPortal,
} from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};
type PropsWithChildren<P> = P & { children?: ReactNode };

const AuthLayout = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <div className={classes.authLayout}>
      <Image
        className={classes.image}
        src={loginPageImage}
        alt="loginPageImage"
      />
      <div className={classes.content}>{children}</div>
      <div className={classes.footer + " bg-White dark:bg-Nero"}>
        <LoginFooter />
      </div>
      <div className={classes.mobileFooter + " bg-White dark:bg-Nero"}>
        <MobileFooter />
      </div>
    </div>
  );
};
export default AuthLayout;
