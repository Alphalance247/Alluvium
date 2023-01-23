import React from "react";
import {MdDoubleArrow} from 'react-icons/md';
import styles from '../../styles/case-studies.module.scss';
import Link from "next/link";
import Image from "next/image";

const CaseStudy = ({caseStudy}) => {
    return (
        <>
        <div className={`container-fluid p-0 m-0 ${styles.caseStudy}`}>
            <div className={styles.head}>
                <Image src={caseStudy?.clientLogo} height={102} width={214} priority loading='eager' />
            </div>
            <div className={styles.body}>
                <h6>{caseStudy?.title}</h6>
                <p>{caseStudy?.description.slice(0, 60)}...</p>
                {
                    caseStudy?.caseStudyPageName && <Link href={'/reel/case-studies/'+caseStudy?.caseStudyPageName}>
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