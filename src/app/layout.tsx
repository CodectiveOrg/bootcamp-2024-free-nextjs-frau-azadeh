import type { Metadata } from "next";

import HeaderComponent from "@/components/header/HeaderComponent";
import "@/styles/typography.css";
import "./globals.css";
import "../styles/fonts.css";

import FooterComponent from "@/components/footer/FooterComponent";


export const metadata: Metadata = {
  title: "کلینیک فوق تخصصی دیابلند",
  description:
    "کلینیک فوق تخصصی دیابلند همراه با پزشکان مجرب آماده پاسخگویی به هموطنان می باشند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" >
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
