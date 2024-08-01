import classes from "./style/LoginForm.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo/Logo.png";
import BaseInput from "../base/BaseInput";
import { useState } from "react";
import { useTranslation } from "@/providers/locale-provider";
import { AxiosError, AxiosResponse } from "axios";
import { RepoFactory } from "../../baseRepository/Factory";
import { useDispatch } from "react-redux";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "@/store/error-slice";
import BaseButton from "../base/BaseButton";
import { Call, Lock } from "iconsax-react";
import { getMobiles } from "@/core/helpers/regx";
import Link from "next/link";
import { useRouter } from "next/router";
import { authActions } from "@/store/auth-slice";

const authRepository = () => RepoFactory.get("auth");
const LoginForm = () => {
  const { t9n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [mobilePhoneNumberInput, setMobilePhoneNumberInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState({
    mobilePhoneNumber: false,
    password: false,
  });
  const inputOnChangeHandler = (
    field: string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    switch (field) {
      case "mobilePhoneNumber":
        setMobilePhoneNumberInput(e.currentTarget.value);
        break;
      case "password":
        setPasswordInput(e.currentTarget.value);
        break;

      default:
        break;
    }
  };
  const CallIcon = () => {
    return <Call />;
  };
  const LockIcon = () => {
    return <Lock />;
  };
  const login = () => {
    if (
      mobilePhoneNumberInput.length > 0 &&
      mobilePhoneNumberInput.length < 11
    ) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "شماره تلفن باید ۱۱ کاراکتر باشد  ",
          statusCode: 0,
        })
      );
    } else if (
      mobilePhoneNumberInput.length > 0 &&
      !getMobiles(mobilePhoneNumberInput)
    ) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "شماره تلفن نا معتبر است.",
          statusCode: 0,
        })
      );
    } else if (passwordInput.length && passwordInput.length < 8) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "رمز عبور شما باید حداقل ۸ کاراکتر باشد ",
          statusCode: 0,
        })
      );
    } else if (
      mobilePhoneNumberInput.length &&
      mobilePhoneNumberInput.length === 11 &&
      passwordInput.length >= 8
    ) {
      dispatch(loadingActions.setHasLoading(true));
      let body = {
        mobilePhoneNumber: mobilePhoneNumberInput,
        password: passwordInput,
      };
      authRepository()
        .login(body)
        .then((res: AxiosResponse<any>) => {
          const date = Math.floor(new Date().getTime() / 1000);
          localStorage.setItem("access_token", res.data[0].access_token);
          localStorage.setItem("login_time", String(date));
          dispatch(authActions.setUserInfo(res.data[0].access_token));
          dispatch(authActions.setIsAuthenticated(true));
          router.push(
            {
              pathname: "/advertisement/new",
            },
            undefined,
            { shallow: true }
          );
          errorActions.setError({
            message: "  با موفقیت وارد شدید.",
            statusCode: 200,
          });
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
    } else {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "لطفا اطلاعات خود را وارد کنید",
          statusCode: 0,
        })
      );
    }
  };
  return (
    <div className={classes.loginForm + " bg-White dark:bg-Nero"}>
      <Image src={logo} alt="logo" className={classes.logo} />
      <div className={classes.form}>
        <div className="w-full input-with-counter">
          <BaseInput
            placeholder={t9n.mobilePhoneNumber}
            name="mobilePhoneNumber"
            handleChange={(e) => inputOnChangeHandler("mobilePhoneNumber", e)}
            isInvalid={errors.mobilePhoneNumber}
            inValidmsg="Please Insert The mobile Phone Number"
            rightIcon={CallIcon()}
            type="number"
            underlineBorder={true}
          />
          <div className="show-input-length">
            <span>{mobilePhoneNumberInput.length}/11</span>
          </div>
        </div>
        <BaseInput
          placeholder={t9n.password}
          name="password"
          handleChange={(e) => inputOnChangeHandler("password", e)}
          isInvalid={errors.password}
          inValidmsg="Please Insert The Password"
          rightIcon={LockIcon()}
          type="password"
          underlineBorder={true}
        />
      </div>
      <span className="text-Blue-Primary hover:text-Blue-600 w-full text-right">
        {t9n.forget_password}
      </span>
      <BaseButton
        title={t9n.login}
        color="primary"
        hasBlock={true}
        onClickHandler={(e) => login()}
      ></BaseButton>
      <Link
        href="/auth/signup"
        className={
          "text-Blue-Primary hover:text-Blue-600 " + classes.signupLink
        }
      >
        {t9n.create_account}
      </Link>
    </div>
  );
};
export default LoginForm;
