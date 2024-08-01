import { DEFAULT_LOCALE, Language } from "../../locales";
import { getEnumByValue } from "./utils";

export const getLocale = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }
  const locale = window.localStorage.getItem("locale");
  return getEnumByValue<Language>(Language, locale) ?? DEFAULT_LOCALE;
};

export const setLocale = (locale: Language) =>
  window.localStorage.setItem("locale", locale);
