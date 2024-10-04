"use client"
import Image from "next/image"
import Link from "next/link"
import link from "next/link"
import icon0 from "../icons/icon0.svg"
import icon1 from "../icons/icon1.png"
import icon2 from "../icons/icon2.png"
import icon3 from "../icons/icon3.png"
import icon4 from "../icons/icon4.png"
import icon5 from "../icons/icon5.svg"

export default function Footer (){
    return(
        <footer className="flex justify-between">
            <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 flex justify-center">
            {/* <div className="flex justify-center ">
                <a href="/">
                <h1><strong>Home</strong></h1></a>
            </div> */}
            <div className="py-16 text-center">
                <h1><strong>THANKS FOR VISITING OUR WEBSITE</strong></h1>
                <br/>
                <br/>
            <div className="flex items-end justify-center py-5 gap-[115px] h-50">
                <a/>
                <a/>
                <a/>
                <Link href="https://www.linkedin.com/in/naseer-ahmed-wighio-a20453285/"><Image src="/icons/icon0.png" alt="LinkedIn" width={30} height={30} /></Link>
                <Link href="https://discord.com/channels/naseerahmedwighio"><Image src="/icons/icon4.png" alt="Discord" width={30} height={30} /></Link>
                <Link href="https://github.com/NaseerAhmedWighio"><Image src="/icons/icon1.png" alt="GitHub" width={30} height={30} /></Link>
                <Link href="https://vercel.com/naseerahmedwighios-projects"><Image src="/icons/icon5.svg" alt="Vercel" width={30} height={30} /></Link>
                <Link href="https://web.facebook.com/NaseerAhmedWighio"><Image src="/icons/icon2.png" alt="Facebook" width={30} height={30} /></Link>
                <Link href="https://www.instagram.com/naseerahmedwighio/"><Image src="/icons/icon3.png" alt="Instagram" width={40} height={40} /></Link>
                <a/>
                <a/>
                <a/>
            </div>
            </div>
            </nav>
        </footer>
    )
}