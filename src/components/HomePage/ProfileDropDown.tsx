import {
  ArrowDown2,
  ArrowUp2,
  Login,
  Moon,
  Sun1,
  User,
  UserAdd,
} from "iconsax-react";
import classes from "./style/ProfileDropDown.module.scss";
import UsaFlag from "../../assets/images/icons/USAFlag.png";
import IranFlag from "../../assets/images/icons/IranFlag.svg";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/providers/locale-provider";
import { IAppLocale, Language, LanguageList } from "../../locales";
import { getLocale } from "../../core/helpers/locale";
import { capitalizeFirst } from "../../core/helpers/utils";
import BaseButton from "../base/BaseButton";
import Link from "next/link";

const ProfileDropDown = () => {
  const { t9n, updateLocale } = useTranslation();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(
    currentTheme === "dark" ? true : false
  );
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getLocale());
  const [showLanguageList, setShowLanguageList] = useState<boolean>(false);
  const toggleDarkMode = (checked: boolean) => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
    setDarkMode(!checked);
  };
  const toggleLanguageList = (input: boolean) => () =>
    setShowLanguageList(input);
  const changeLanguage = (language: Language) => () => {
    setCurrentLanguage(language);
    updateLocale(language);
    setShowLanguageList(false);
  };
  const getLangFlags = (lang: string) => {
    switch (lang) {
      case "فارسی":
        return IranFlag;
      case "English":
        return UsaFlag;
    }
  };
  const loginIcon = () => {
    return <Login className=" w-6 h-6 text-white " />;
  };
  const registerIcon = () => {
    return <UserAdd className=" w-6 h-6 text-Blue-Primary " />;
  };
  return (
    <div className={" bg-white dark:bg-black " + classes.formLayout}>
      <div
        className={" border-2 border-solid border-slate-300 " + classes.header}
      >
        <Link href="/profile">
          <User
            className={
              " flex w-5 h-5 text-slate-400 hover:text-Blue-Primary cursor-pointer "
            }
          />
        </Link>

        {darkMode ? (
          <Sun1
            className={
              "  text-slate-400 py-2 px-2 flex items-center rounded-full justify-center border-2 border-slate-300 cursor-pointer " +
              classes.darkModeIcon
            }
            onClick={() => toggleDarkMode(darkMode)}
          />
        ) : (
          <Moon
            className={
              " text-slate-400 py-2 px-2 flex items-center rounded-full justify-center border-2 border-slate-300 cursor-pointer " +
              classes.darkModeIcon
            }
            onClick={() => toggleDarkMode(darkMode)}
          />
        )}
      </div>
      <div
        className={" w-full border-2 border-slate-300 " + classes.languageBox}
      >
        <div
          className={" w-full " + classes.langguageItem}
          onClick={() => setShowLanguageList(!showLanguageList)}
        >
          <div className={" w-5/6 " + classes.itemBox}>
            <Image
              alt="flag"
              src={getLangFlags(currentLanguage)}
              className=" w-6 h-6 rounded-full "
            />
            <span
              className={classes.itemTitle}
            >{`${t9n.change_language}(${currentLanguage})`}</span>
          </div>
          <div className=" flex items-end justify-end w-1/6 ">
            {!showLanguageList ? (
              <ArrowDown2 className=" w-6 h-6 text-slate-300 items-center " />
            ) : (
              <ArrowUp2 className=" w-6 h-6 text-slate-300 items-center " />
            )}
          </div>
        </div>

        {showLanguageList &&
          LanguageList.map((lang, index) => {
            if (lang !== currentLanguage) {
              return (
                <div
                  key={index}
                  className={" w-full " + classes.langguageItem}
                  onClick={changeLanguage(lang)}
                >
                  <div className={" w-full " + classes.itemBox}>
                    <Image
                      alt="flag"
                      src={getLangFlags(lang)}
                      className=" w-6 h-6 rounded-full "
                    />
                    <span className={classes.itemTitle}>{lang}</span>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <div className={" w-full " + classes.actionBox}>
        <Link href="/auth/login" className=" w-full ">
          <BaseButton
            hasBlock={true}
            color="primary"
            title={t9n.login}
            RightIcon={loginIcon()}
          />
        </Link>
        <Link href="/auth/signup" className=" w-full ">
          <BaseButton
            hasBlock={true}
            color="outline"
            title={t9n.Register}
            RightIcon={registerIcon()}
          />
        </Link>
      </div>
    </div>
  );
};
export default ProfileDropDown;
