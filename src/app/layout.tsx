import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Giulia Moukouyou | Front End Developer",

  description:
    "Giulia Moukouyou | Front End Developer | React, JavaScript, Node.js, Express, PostgreSQL, Tailwind, Bootstrap, HTML, CSS, GIT, Figma",

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
    "Node.js",
    "Express",
    "SQL",
    "PostgreSQL",
    "SQL Server",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Git",
    "Figma"
  ],

  authors: [{ name: "Giulia Moukouyou", url: "https://www.giuliadev.com/"}],

  openGraph: {

    title: "Giulia Moukouyou | Front End Developer",
    description:
    "Giulia Moukouyou | Web Developer Front End | React, Next.js, JavaScript, Node.js, SQL, HTML, CSS, Tailwind, Figma e Git.",
    url:" https://www.giuliadev.com/",
    siteName: "Giulia Moukouyou - Front End Developer",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giulia Moukouyou | Front End Developer",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giulia Moukouyou | Front End Developer",
    description: "Giulia Moukouyou | Front End Developer",
    images: ["/twitter-image.jpg"],
  },
  metadataBase: new URL("https://www.giuliadev.com"),
};

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // font weights
  variable: "--font-poppins",
});

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
      {/* Link rel="canonical" */}
      <link rel="canonical" href="https://www.giuliadev.com/" />
    </head>
      <body className={`${poppins.variable} font-poppins`}>
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
