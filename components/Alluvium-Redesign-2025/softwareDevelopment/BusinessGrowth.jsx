import React from 'react'
import style from "styles/AlluviumRedesign2025/SoftwareDevelopment/softwareDevelopment.module.scss"

const BusinessGrowth = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className={style.BusinessGrowth}>
            <div className={style.box}>
                <div className={style.BusinessGrowth_space}>
                    <div className={style.space}>
                        <div className={style.BusinessGrowth_space_text}>
                            <h3 className={style.text}>{title}
                            </h3>
                            <p>
                                {description}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.divider}></div> */}
            <div className={style.box}>
                <div className={style.imageContainer} ><img src={imageUrl} alt='softwarepic' className={style.image} /></div>
            </div>
        </div>
    )
}

export default BusinessGrowth