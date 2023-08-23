"use client"
import Image from "next/image"
import { CustomButtonProps } from "@/types"
import Link from "next/link"

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyles,rightIcon,isDisabled,hrefs,isLink}:CustomButtonProps) => {
  
    return (
        
            <button
                
                type={btnType || "button"}
                className={`custom-btn ${containerStyles}
                `}
                onClick={handleClick}
                
            >
                {!isLink?(
                    <span className={`flex-1 ${textStyles}`} >{title}</span>
                ):(
                    <Link className={`flex-1 ${textStyles}`} href={`${hrefs}`}>{title}</Link>
                )}
                {rightIcon && (
                    <span className="relative w-6 h-6" >
                        <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
                    </span>
                )}
            </button>
        
    )
}

export default CustomButton