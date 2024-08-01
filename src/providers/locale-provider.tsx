import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { AppLocales, DEFAULT_LOCALE, IAppLocale, Language } from "../locales";
import { getLocale, setLocale } from "../core/helpers/locale";

interface ILocaleContext {
  t9n: IAppLocale;
  updateLocale: (locale: Language) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  t9n: {} as IAppLocale,
  updateLocale: (locale: Language) => {},
});

const LocaleProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [t9n, setT9n] = useState(
    AppLocales[getLocale()] ?? AppLocales[DEFAULT_LOCALE]
  );

  const updateLocale = (locale: Language) => {
    setLocale(locale);
    setT9n(AppLocales[locale]);
  };

  const value = useMemo(() => {
    return {
      t9n,
      updateLocale,
    };
  }, [t9n]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

const useTranslation = () => {
  const { t9n, updateLocale } = useContext(LocaleContext);
  return { t9n, updateLocale };
};

export { LocaleProvider, useTranslation };
