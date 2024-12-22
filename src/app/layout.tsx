import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Giulia Moukouyou | Web Developer",
  description:
    "Giulia Moukouyou | Web Developer - creo siti web da zero, progettando il design e scrivendo il codice. Le mie tecnologie sono: React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, Figma e Git.",
  keywords: [
    "Giulia Moukouyou",
    "web developer",
    "sviluppo web",
    "front-end",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Git"
  ],
  authors: [{ name: "Giulia Moukouyou", url: "https://www.giuliadev.com/"}],
  openGraph: {
    title: "Giulia Moukouyou | Web Developer",
    description:
    "Giulia Moukouyou | Web Developer - creo siti web da zero, progettando il design e scrivendo il codice. Le mie tecnologie sono: React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, Figma e Git.",
    url:" https://www.giuliadev.com/",
    siteName: "Giulia Moukouyou Portfolio",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
        alt: "Giulia Moukouyou | Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giulia Moukouyou | Web Developer",
    description:
    "Giulia Moukouyou | Web Developer - creo siti web da zero, progettando il design e scrivendo il codice. Le mie tecnologie sono: React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, Figma e Git.",
    images: [""],
  },
  metadataBase: new URL("https://www.giuliadev.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Link rel="canonical" */}
      <link rel="canonical" href="https://www.giuliadev.com/" />
    </head>
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
