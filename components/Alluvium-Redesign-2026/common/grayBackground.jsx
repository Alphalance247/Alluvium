import Image from 'next/image'
import React from 'react'
import Container from './container'

const GrayBackground = ({ title, description, children, imageUrl, className }) => {
    return (
        <div className={`bg-tertiary-150 ${className} `}>
            {/* <div className="max-w-7xl mx-auto w-full lg:px-16 md:px-12  px-6"> */}
            <Container>
                <div className='flex flex-col gap-4 xl:w-[579px] w-full '>
                    <h4 className="font-bold text-3xl leading-[38px] text-tertiary-300 font-merriweather">{title}</h4>
                    <p className="font-medium font-manrope text-lg text-tertiary-200">{description}</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-16 xl:gap-[77px] pt-12">

                    <div className="bg-grey-150 w-full md:w-1/2 lg:w-[575px] rounded-2xl h-[368px] ">
                        {/* <Image src={imageUrl} alt="image" width={575} height={368} className="rounded-2xl bg-grey-150 w-full h-full" /> */}
                    </div>
                    <div className='w-full md:w-1/2'>{children}</div>
                </div>
            </Container>
            {/* </div> */}
        </div>
    )
}

export default GrayBackground