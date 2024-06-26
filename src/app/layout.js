import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photographer Website",
  description: "Professional photographer",
};

export default function RootLayout({ children })
{
  return(
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}