import * as React from "react"
export { wrapPageElement } from "./src/utils/wrapPageElement";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/KronaOne-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="kronaOne"
    />, <link
      rel="preload"
      href="/fonts/Interstate-Regular-Font.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />, <link
      rel="preload"
      href="/fonts/Gilroy-ExtraBold.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="gilroy"
    />, <link
      rel="preload"
      href="/fonts/Gilroy-Light.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="gilroy"
    />, <link
      rel="preload"
      href="/fonts/Raleway.ttf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="raleway"
    />,
  ])



}