import React from "react";
import {MdDoubleArrow} from 'react-icons/md';
import styles from '../../styles/case-studies.module.scss';
import Link from "next/link";

const CaseStudy = ({caseStudy}) => {
    return (
        <>
        <div className={`container-fluid p-0 m-0 ${styles.caseStudy}`} style={{backgroundImage: `url(${caseStudy?.clientLogo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center -100px'}}>
            {/* <div className={styles.head}>
                <Image src={caseStudy?.clientLogo} alt={caseStudy?.title} height={102} width={214} priority loading='eager' />
            </div> */}
            <div className={styles.body}>
                <h4>{caseStudy?.details?.title}</h4>
                <p>{caseStudy?.details?.description.slice(0, 50)}...</p>
                {
                    caseStudy?.caseStudyPageName && <Link href={'/case-studies/'+caseStudy?.caseStudyPageName}>
                        <a>
                        View Case Study <MdDoubleArrow />
                        </a>
                    </Link>
                    }
            </div>
        </div>
        </>
    )
}

export default CaseStudy;