import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const font = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + " bg-white"}>
        <Navbar />
        <div className=" px-1.5 max-w-md py-4">{children}</div>
      </body>
    </html>
  );
}
