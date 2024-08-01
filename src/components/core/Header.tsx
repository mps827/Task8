import classes from "./style/Header.module.scss";
import {
  AddCircle,
  ArrowDown2,
  Profile,
  SearchNormal1,
  LanguageCircle,
  TickCircle,
  HambergerMenu,
  Minus,
  Sun,
  Moon,
  Sun1,
  Location,
} from "iconsax-react";
import BaseButton from "../base/BaseButton";
import { useTranslation } from "@/providers/locale-provider";
import Image from "next/image";
import BaseInput from "../base/BaseInput";
import { IAppLocale, Language, LanguageList } from "../../locales";
import { useState, useEffect, useRef } from "react";
import { getLocale } from "../../core/helpers/locale";
import { capitalizeFirst } from "../../core/helpers/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import Logo from "../../assets/images/logo/MainLogo.png";
import BaseSelectInput from "../base/BaseSelectInput";
import UsaFlag from "../../assets/images/icons/USAFlag.png";
import Modal from "../base/Modal";
import CitySelectionBox from "../base/CitySelectionBox";
import ProfileDropDown from "../HomePage/ProfileDropDown";
const Header = () => {
  const profileDropDownRef = useRef<HTMLDivElement>(null);
  const { t9n, updateLocale } = useTranslation();
  const [locationModalFlag, setLocationModalFlag] = useState<boolean>(false);
  const [profileDropDownFlag, setProdileDropDownFlag] =
    useState<boolean>(false);
  const [hState, sethState] = useState("top");

  useEffect(() => {
    var lastVal = 0;
    console.log(hState);

    window.onscroll = function () {
      console.log("test test");

      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  });
  const handleClickOutside = (event: MouseEvent) => {
    const { target } = event;
    if (
      profileDropDownRef.current &&
      !profileDropDownRef.current.contains(target as HTMLElement)
    ) {
      setProdileDropDownFlag(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [profileDropDownRef]);

  return (
    <div
      className={" bg-white dark:bg-Raisin-Black " + classes.headerContariner}
    >
      <div className={"flex justify-between items-center " + classes.headerRow}>
        <div className="flex items-center gap-8 justify-between self-stretch ">
          <Link
            href="/"
            className=" flex items-center justify-center flex-nowrap"
          >
            <Image className={classes.logo} src={Logo} alt="logo" />
          </Link>
          <div className="flex gap-2 items-center text-Grey">
            <div
              className={
                " flex flex-row gap-1 items-center cursor-pointer border-2 border-slate-300 hover:bg-slate-100 p-2 rounded-3xl "
              }
              onClick={() => setLocationModalFlag(true)}
            >
              <span className={" text-Dove_Grey " + classes.categoryTitle}>
                تهران
              </span>
              <Location
                className={
                  " w-5 h-5 items-center justify-center text-Dove_Grey"
                }
              />
            </div>
            <div
              className={
                " flex flex-row gap-1 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md "
              }
            >
              <span className={" text-Dove_Grey " + classes.categoryTitle}>
                {t9n.tools}
              </span>
              <ArrowDown2
                className={
                  " w-6 h-6 items-center justify-center text-Dove_Grey"
                }
              />
            </div>
            <div
              className={
                " flex flex-row gap-1 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md "
              }
            >
              <Link href={'/advertisement/search'} className={" text-Dove_Grey " + classes.categoryTitle}>
                {t9n.Real_estate}
              </Link>
              <ArrowDown2
                className={
                  " w-6 h-6 items-center justify-center text-Dove_Grey"
                }
              />
            </div>
            <div
              className={
                " flex flex-row gap-1 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md "
              }
            >
              <span className={" text-Dove_Grey " + classes.categoryTitle}>
                {t9n.faq}
              </span>
            </div>
            <div
              className={
                " flex flex-row gap-1 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md "
              }
            >
              <span className={" text-Dove_Grey " + classes.categoryTitle}>
                {t9n.Terms_and_Conditions}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link href="/advertisement/new">
            <BaseButton size="sm" title={t9n.header_button} color="primary" />
          </Link>
          <div className={" flex items-center relative"}>
            <Profile
              className={
                " border-2 border-slate-300 dark:border-slate-50 text-slate-400 dark:text-slate-50 cursor-pointer " +
                classes.profileIcon
              }
              onClick={() => {
                setProdileDropDownFlag(true);
              }}
            />
            {profileDropDownFlag && (
              <div className={classes.profileDropDown} ref={profileDropDownRef}>
                <ProfileDropDown />
              </div>
            )}
          </div>
        </div>
      </div>
      {locationModalFlag && <Modal body={<CitySelectionBox />} />}
    </div>
  );
};
export default Header;
