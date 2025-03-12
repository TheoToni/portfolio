import type { Metadata } from "next";
import { Fira_Code, Fira_Mono } from "next/font/google";
import "../app/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: "400",
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey there!",
  description: "My portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${firaMono.variable}  bg-[#01090E]  min-h-screen lg:px-10 px-4 lg:py-10 py-4`}
      >
        <Header />
        <div className="bg-[#011627] border-x border-[#1e2d3d]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
