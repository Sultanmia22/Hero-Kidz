import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar";
import Footer from "@/Components/Layouts/Footer";

const poppins = Poppins(
 {
  weight: ['100','200','400','500','600','700','800']
 }
)

export const metadata = {
  title: {
    default: 'Hero Kidz',
  },
  description: "Hero Kidz Application — A colorful and engaging kids-focused platform designed to inspire creativity, learning, and fun in a safe digital environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased`}
      >

      <header>
        <Navbar/>
      </header>

      <main className=" py-5 md:w-11/12 mx-auto min-h-[calc(100vh-320px)]">
          {children}
      </main>

        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
