import classes from "./style/SignUpForm.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo/Logo.png";
import BaseInput from "../base/BaseInput";
import { useTranslation } from "@/providers/locale-provider";
import { useEffect, useState } from "react";
import { UserEdit, Call, Edit2, Google, Lock } from "iconsax-react";
import validator from "validator";
import BaseButton from "../base/BaseButton";
import { AxiosError, AxiosResponse } from "axios";
import { RepoFactory } from "../../baseRepository/Factory";
import { useDispatch } from "react-redux";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "@/store/error-slice";
import { useRouter } from "next/router";
import { isValidIranianNationalCode, getMobiles } from "@/core/helpers/regx";
const authRepository = () => RepoFactory.get("auth");
const SignUpForm = () => {
  const router = useRouter();
  const { t9n } = useTranslation();
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [nationalIdInput, setNationalIdInput] = useState("");
  const [mobilePhoneNumberInput, setMobilePhoneNumberInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
  const [emailvalidat, setEmailValidate] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    nationalId: false,
    mobilePhoneNumber: false,
    email: false,
    password: false,
    repeatPassword: false,
  });

  const inputOnChangeHandler = (
    field: string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    switch (field) {
      case "firstName":
        setFirstNameInput(e.currentTarget.value);
        break;
      case "lastName":
        setLastNameInput(e.currentTarget.value);
        break;
      case "nationalId":
        if (e.currentTarget.value.length <= 10) {
          setNationalIdInput(e.currentTarget.value);
        }
        break;
      case "mobilePhoneNumber":
        setMobilePhoneNumberInput(e.currentTarget.value);
        break;
      case "email":
        setEmailInput(e.currentTarget.value);
        if (isValidEmail(e.currentTarget.value)) {
          setEmailValidate(true);
        }
        break;
      case "password":
        setPasswordInput(e.currentTarget.value);
        if (e.currentTarget.value === repeatPasswordInput) {
          setCheckedPassword(true);
        } else {
          setCheckedPassword(false);
        }
        break;
      case "repeatPassword":
        setRepeatPasswordInput(e.currentTarget.value);
        if (passwordInput === e.currentTarget.value) {
          setCheckedPassword(true);
        } else {
          setCheckedPassword(false);
        }
        break;
      default:
        break;
    }
    if (field === "repeatPassword" && e.currentTarget.value !== passwordInput) {
      setErrors({ ...errors, [field]: true });
    } else {
      setErrors({ ...errors, [field]: false });
    }
  };
  const isValidEmail = (email: string) => {
    if (email.length !== 0) {
      if (validator.isEmail(email)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const UserIcon = () => {
    return <UserEdit />;
  };
  const CallIcon = () => {
    return <Call />;
  };
  const GoogleIcon = () => {
    return <Google />;
  };
  const EditIcon = () => {
    return <Edit2 />;
  };
  const LockIcon = () => {
    return <Lock />;
  };
  const SignUp = () => {
    if (emailInput.length > 0 && !emailvalidat) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "ایمیل صحیح وارد کنید ",
          statusCode: 0,
        })
      );
    } else if (
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
    } else if (nationalIdInput.length > 0 && nationalIdInput.length < 10) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "کد ملی باید 10 کاراکتر باشد  ",
          statusCode: 0,
        })
      );
    } else if (
      nationalIdInput.length > 0 &&
      !isValidIranianNationalCode(nationalIdInput)
    ) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "کد ملی نا معتبر است.",
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
    } else if (passwordInput.length && !checkedPassword) {
      dispatch(errorActions.setHasError(true));
      dispatch(
        errorActions.setError({
          message: "رمز عبور و تکرار رمز عبور یکسان نیست ",
          statusCode: 0,
        })
      );
    } else if (
      ((emailInput.length && emailvalidat) ||
        (mobilePhoneNumberInput.length &&
          mobilePhoneNumberInput.length === 11)) &&
      passwordInput.length >= 8 &&
      (nationalIdInput.length || nationalIdInput.length) &&
      checkedPassword
    ) {
      dispatch(loadingActions.setHasLoading(true));
      let body = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        nationalId: nationalIdInput,
        mobilePhoneNumber: mobilePhoneNumberInput,
        email: emailInput,
        password: passwordInput,
      };
      authRepository()
        .register(body)
        .then((res: AxiosResponse<any>) => {
          linkToLoginPage();
          dispatch(
            errorActions.setError({
              message: " ثبت نام با موفقیت ایجاد شد.",
              statusCode: 200,
            })
          );
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
  const linkToLoginPage = () => {
    router.push("/auth/login");
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (validator.isEmail(emailInput)) {
        setEmailValidate(true);
        dispatch(errorActions.setHasError(false));
        dispatch(errorActions.setError(null));
      } else if (emailInput.length) {
        setEmailValidate(false);
      }
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [emailInput]);
  return (
    <div className={classes.signUpForm}>
      <div className={classes.headerTitle}>
        <h1 className="text-2xl text-White font-bold">{t9n.register_now}</h1>
        <h3 className="text-xl text-White font-normal">{t9n.Complete_info}</h3>
      </div>
      <Image src={logo} alt="logo" className={classes.logo} />
      <div className={classes.form}>
        <BaseInput
          placeholder={t9n.firstName}
          name="first name"
          handleChange={(e) => inputOnChangeHandler("firstName", e)}
          isInvalid={errors.firstName}
          inValidmsg="Please Insert The First Name"
          // noColor={true}
          rightIcon={UserIcon()}
          value={firstNameInput}
        />
        <BaseInput
          placeholder={t9n.lastName}
          name="last name"
          handleChange={(e) => inputOnChangeHandler("lastName", e)}
          isInvalid={errors.lastName}
          inValidmsg="Please Insert The Last Name"
          // noColor={true}
          value={lastNameInput}
          rightIcon={UserIcon()}
        />
        <div className="w-full input-with-counter">
          <BaseInput
            placeholder={t9n.mobilePhoneNumber}
            name="mobilePhoneNumber"
            handleChange={(e) => inputOnChangeHandler("mobilePhoneNumber", e)}
            isInvalid={errors.mobilePhoneNumber}
            inValidmsg="Please Insert The mobile Phone Number"
            // noColor={true}
            value={mobilePhoneNumberInput}
            rightIcon={CallIcon()}
          />
          <div className="show-input-length">
            <span>{mobilePhoneNumberInput.length}/11</span>
          </div>
        </div>
        <div className="w-full input-with-counter">
          <BaseInput
            placeholder={t9n.nationalId}
            name="nationalId"
            value={nationalIdInput}
            handleChange={(e) => inputOnChangeHandler("nationalId", e)}
            isInvalid={errors.nationalId}
            inValidmsg="Please Insert The Name"
            // noColor={true}
            rightIcon={EditIcon()}
          />
          <div className="show-input-length">
            <span>{nationalIdInput.length}/10</span>
          </div>
        </div>
        <BaseInput
          placeholder={t9n.email}
          name="email"
          handleChange={(e) => inputOnChangeHandler("email", e)}
          isInvalid={errors.email}
          inValidmsg="Please Insert The Name"
          // noColor={true}
          rightIcon={GoogleIcon()}
          value={emailInput}
        />
        <BaseInput
          placeholder={t9n.password}
          name="password"
          handleChange={(e) => inputOnChangeHandler("password", e)}
          isInvalid={errors.password}
          inValidmsg="Please Insert The Password"
          // noColor={true}
          rightIcon={LockIcon()}
          type="password"
          value={passwordInput}
        />
        <BaseInput
          placeholder={t9n.repeat_password}
          name="repeat password"
          handleChange={(e) => inputOnChangeHandler("repeatPassword", e)}
          isInvalid={errors.repeatPassword}
          inValidmsg="Please Insert The Password"
          // noColor={true}
          rightIcon={LockIcon()}
          type="password"
          value={repeatPasswordInput}
        />
      </div>

      <div className={classes.formButtons}>
        <div className={classes.btnSection}>
          <BaseButton
            title={t9n.Register}
            color="primary"
            hasBlock={true}
            onClickHandler={(e) => SignUp()}
          ></BaseButton>
        </div>
        <div className={classes.btnSection}>
          <BaseButton
            title={t9n.login}
            hasBlock={true}
            onClickHandler={(e) => linkToLoginPage()}
          ></BaseButton>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
