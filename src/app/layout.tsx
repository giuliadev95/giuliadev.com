import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Giulia Moukouyou",
  description: "Web developer and Web designer: I create repsonsive and fast websites using React, Next.js, Tailwind, Javascript, HTML, CSS, Figma, Git.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>     
      </body>
    </html>
  );
}
