"use client"
import { useState } from 'react'
import { CarProps } from '@/types'
import { CarDetailes, CustomButton } from '.';
import { calculateCarRent, generateCardImageUrl } from '@/utils';
import Image from 'next/image';

interface CardcarProps {
    car: CarProps;
}

const CardCar = ({ car }: CardcarProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const CarRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="car-card group">
                <div className="car-card__content">
                    <h2 className='car-card__content-title'>
                        {make} {model}
                    </h2>
                </div>
                <p className='flex mt-6 text-[32px] font-extrabold'>
                    <span className='self-start text-[14px] font-semibold'>
                        $
                    </span>
                    {CarRent}
                    <span className='self-end text-[14px] font-medium'>
                        /day
                    </span>
                </p>
                <div className="relative w-full h-40 my-3 object-contain">
                    <Image src={generateCardImageUrl(car)} alt='car model'
                        fill priority className='object-contain' />
                </div>

                <div className="relative flex w-full mt-2">
                    <div className="flex group-hover:invisible w-full
                justify-between text-gray">
                        <div className="flex flex-col jsutify-center items-center gap-2">
                            <Image src="/streening-wheel.svg" width={20} alt='streening wheel' height={20} />
                            <p className="text-[14px]">
                                {transmission === "a" ? "Automatic" : "Manual"}
                            </p>
                        </div>
                        <div className="flex flex-col jsutify-center items-center gap-2">
                            <Image src="/tire.svg" width={20} alt='tire' height={20} />
                            <p className="text-[14px]">
                                {drive.toUpperCase()}
                            </p>
                        </div>
                        <div className="flex flex-col jsutify-center items-center gap-2">
                            <Image src="/gas.svg" width={20} alt='gas' height={20} />
                            <p className="text-[14px]">
                                {city_mpg} MPG
                            </p>
                        </div>
                    </div>

                    <div className="car-card__btn-container">
                        <CustomButton
                            title='view more'
                            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                            textStyles="text-white text-[14px] leading-[17px] font-bold"
                            rightIcon="/right-arrow.svg"
                            handleClick={() => setIsOpen(true)} />
                    </div>

                </div>
                <CarDetailes
                    isOpen={isOpen}
                    closeModal={() => { setIsOpen(false) }}
                    car={car} />
            </div>
        </>
    )
}

export default CardCar