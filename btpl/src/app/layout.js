
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navabar'
import Registration from '../components/register'
import Login from '../components/login'
// import FormData1 from "@/components/formData1";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Britwise Technology",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {/* <Registration/> */}
        {/* <Login/> */}
        {/* <FormData1/> */}
      </body>
    </html>
  );
}