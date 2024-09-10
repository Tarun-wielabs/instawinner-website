import type { Metadata } from "next";
import "./globals.css";
import { titilliumWebRegular } from "./util/fonts";

export const metadata: Metadata = {
  title: "InstaWinner",
  description: "InstaWinner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titilliumWebRegular.className} antialiased no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
