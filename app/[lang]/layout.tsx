import type { Metadata } from "next";
import "./globals.css";
import { titilliumWebRegular } from "../../util/fonts";

import { Locale, i18n } from "@/i18n.config";

export const metadata: Metadata = {
  title: "InstaWin",
  description: "InstaWin",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${titilliumWebRegular.className} antialiased no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
