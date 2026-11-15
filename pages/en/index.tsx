import React from "react";
import Home from "../index";
import { LocaleProvider } from "../../utils/locale";

export default function HomeEn() {
  return (
    <LocaleProvider locale="en">
      <Home />
    </LocaleProvider>
  );
}
