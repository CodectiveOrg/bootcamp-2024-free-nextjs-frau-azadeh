import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "کلینیک فوق تخصصی دیابت تابان",
  description:
    "کلینیک فوق تخصصی دیابت تابان در شهرک غرب تهران همراه با پزشکان مجرب آماده پاسخگویی به هموطنان می باشند",
import { Vazirmatn } from 'next/font/google'
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ['latin','arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "کلینیک فوق تخصصی دیابت تابان",
  description: "کلینیک فوق تخصصی دیابت تابان در شهرک غرب تهران همراه با پزشکان مجرب آماده پاسخگویی به هموطنان می باشند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
