import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

import avatar from "../../../public/Web3LagosSvg/button-icon.png"
import downArror from "../../../public/Web3LagosSvg/icon.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="w-full py-4 border-b-[1px] border-[#F0F2F5] flex justify-end items-center gap-x-4 pr-10">
      <Image src={avatar} alt="avatar" className="w-[38px]" />
      <Image src={downArror} alt="avatar" className="w-[18px]" />
      </div>
      {children}
    </div>
  );
}
