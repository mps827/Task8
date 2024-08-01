import { ENLocale } from "./en-locale";
import { FALocale } from "./fa-locale";

export enum Language {
  EN = "English", // English
  FA = "فارسی", // Farsi
}

export const DEFAULT_LOCALE = Language.FA;

export type IAppLocale = typeof FALocale;

export const AppLocales: Record<Language, IAppLocale> = {
  [Language.EN]: ENLocale,
  [Language.FA]: FALocale,
};

export const LanguageList = [Language.EN, Language.FA];
