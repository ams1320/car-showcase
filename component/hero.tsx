"use client"

import Image from "next/image";
import { CustomButton } from "./";
import Link from "next/link";

const Hero = () => {

    const handleScroll = ()=>{

    }

    return (
    <>
 
    <div className="hero">
        <div className="flex-1 pt-20 padding-x hero-text">
            <h1 className="hero__title ">
                Find, book, or rent a car --quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental exprience with our effortless booking process.
            </p>
            <CustomButton 
            hrefs="#discover"
            isLink={true}
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick ={handleScroll}
            
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain img-animation"/>
            </div>
                <div className="hero__image-overlay "/>
        </div>
    </div>
    </>
    )
}

export default Hero;