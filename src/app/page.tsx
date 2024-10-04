"use client"
import Image from "next/image";
import Link from "next/link";
import { metadata } from "./layout";
import { title } from "process";
import naseer from "@/app/icons/naseer.jpg"

// export const metadata = {
//   title:"Next Apps"
// };

export default function Home() {
  return (
         <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <a className="flex items-center justify-center py-28"> <Image src={naseer} alt="Profile Picture" width={200} height={200} className="rounded-full border-4 border-gray-200 shadow-2xl hover:scale-105" /></a>
          <h1 className="text-5xl text-center font-bold flex items-center justify-center">Hi</h1>
          <h1 className="text-5xl text-center font-bold flex items-center justify-center">I am</h1>
          <h1 className="transition text-9xl text-center font-bold flex items-center justify-center">Naseer Ahmed Wighio</h1>
          {/* <center> <Link href="/"><h2>Home</h2></Link>
          <Link href="about"><h2>Go To About</h2></Link>
        <Link href="contact"><h2>Contact Us</h2></Link>
      </center> */}
    </div>
  );
} 