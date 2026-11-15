import { useRouter } from "next/router";
import React, { createContext, useContext } from "react";
import { Locale } from "./translation/content";

const LocaleContext = createContext<Locale | null>(null);

export const LocaleProvider: React.FC<{
  locale: Locale;
  children: React.ReactNode;
}> = ({ locale, children }) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);

export const useLocale = (): Locale => {
  const ctx = useContext(LocaleContext);
  const router = useRouter();
  if (ctx) return ctx;
  if (router?.locale === "en" || router?.pathname?.startsWith("/en")) {
    return "en";
  }
  return "pt-BR";
};
