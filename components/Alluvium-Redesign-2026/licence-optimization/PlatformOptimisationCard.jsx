import MarkIcon from 'components/Alluvium-Redesign-2025/icons/MarkIcon'
import React from 'react'

const PlatformOptimisationCard = ({ className, title, captionText, contents }) => {
    return (
        <div className={`${className} p-4 md:p-10 rounded-xl h-auto flex flex-col gap-6`}>

            <h3 className="text-lg font-manrope font-bold text-tertiary-300 ">{title}</h3>
            <div>

                {Array.isArray(contents) ? (
                    <div className="p-3 md:p-6 bg-lightBlue-50 rounded-lg flex flex-col gap-4">
                        {contents.map((content, index) => (
                            <div key={index} className={`flex items-start gap-3 ${index !== contents.length - 1 ? 'border-b-[1px] border-[#B5BABE]' : 'border-none'}`}>
                                <div>
                                    <MarkIcon color="text-tertiary-300 " className="flex-shrink-0 md:h-[18px] md:w-[18px] h-auto w-auto" />
                                </div>
                                <div className=' md:w-[438px]'>  <p className="text-base text-tertiary-300 font-merriweather italic font-medium pb-4 ">
                                    {content}
                                </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className=" p-6 text-base text-tertiary-300 font-merriweather italic font-normal">
                        {contents}
                    </p>
                )}
            </div>
            <div>
                <p className="text-xl text-tertiary-300 font-merriweather italic font-normal">Typical savings:<span className='font-semibold'>
                    {captionText}</span></p>
            </div>
        </div>
    )
}

export default PlatformOptimisationCard