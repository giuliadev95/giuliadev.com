import type { Metadata } from "next";
import "../styles/globals.css"
import NavBar from "@/components/Navbar";
// import Footer.tsx

export const metadata: Metadata = {
  title: "Giulia Moukouyou | Front End Developer",
  description:
    "Giulia Moukouyou | Front End Developer | React, JavaScript, Node.js, Express, PostgreSQL, Tailwind, Bootstrap, HTML, CSS, GIT, Figma - ",
  keywords: [
    "Giulia Moukouyou",
    "web developer",
    "sviluppo web",
    "Front End",
    "Front-End",
    "front end",
    "front-end",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstap",
    "Git",
    "Figma"
  ],
  authors: [{ name: "Giulia Moukouyou", url: "https://www.giuliadev.com/"}],
  openGraph: {
    title: "Giulia Moukouyou | Front End Developer",
    description:
    "Giulia Moukouyou | Web Developer - creo siti web da zero, progettando il design e scrivendo il codice. Le mie tecnologie sono: React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind, Figma e Git.",
    url:" https://www.giuliadev.com/",
    siteName: "Giulia Moukouyou Portfolio",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
        alt: "Giulia Moukouyou | Front End Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giulia Moukouyou | Front End Developer",
    description:
    "Giulia Moukouyou | Front End Developer | Creo siti web e web app",
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
          {/** <Header/> */}  
          <NavBar/>   
        </header>
        <main>
          {children}
        </main>    
        <footer>
         {/** <Footer/> */}   
        </footer> 
      </body>
    </html>
  );
}
