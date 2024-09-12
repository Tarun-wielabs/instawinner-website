import localFont from "next/font/local";

const mulish = localFont({
  src: "../public//fonts/Mulish-VariableFont_wght.ttf",
  variable: "--font-mulish",
  weight: "100 200 300 400 500 600 700 800 900",
});

const titilliumWebLight = localFont({
  src: "../public//fonts/TitilliumWeb-Light.ttf",
  variable: "--font-titillium-light",
  weight: "300",
});

const titilliumWebRegular = localFont({
  src: "../public//fonts/TitilliumWeb-Regular.ttf",
  variable: "--font-titillium-regular",
  weight: "400",
});

const titilliumWebSemiBold = localFont({
  src: "../public//fonts/TitilliumWeb-SemiBold.ttf",
  variable: "--font-titillium-semibold",
  weight: "600",
});

const titilliumWebBold = localFont({
  src: "../public//fonts/TitilliumWeb-Bold.ttf",
  variable: "--font-titillium-bold",
  weight: "700",
});

const titilliumWebBlack = localFont({
  src: "../public//fonts/TitilliumWeb-Black.ttf",
  variable: "--font-titillium-bold",
  weight: "900",
});

const rubik = localFont({
  src: "../public//fonts/Rubik-Medium.ttf",
  variable: "--font-rubik",
  weight: "500",
});

export {
  mulish,
  titilliumWebLight,
  titilliumWebRegular,
  titilliumWebSemiBold,
  titilliumWebBold,
  titilliumWebBlack,
  rubik,
};
