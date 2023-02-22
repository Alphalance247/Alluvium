import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdDoubleArrow } from 'react-icons/md';
import styles from "../../styles/services.module.scss";

const Service = ({ icon, service }) => {
    return (
        <>
            <div className={`container-fluid mb-5 mb-sm-0 ${styles.service}`}>
                <div className="d-flex align-items-center mb-4">
                    <Image src={icon} alt={service?.title} height={50} width={50} priority loading='eager' />
                    <div className="ms-3">
                        <h4>{service?.title}</h4>
                        <span>{service?.services?.length || '0'} Services</span>
                    </div>
                </div>
                <ul className="list-group list-group-flush p-0">
                    {
                        service?.services?.map(subService => (
                            <li className="list-group-item m-0 px-0 bg-transparent d-flex align-items-center" key={subService}>
                                <HiOutlineArrowNarrowRight className="me-2" />{subService}
                            </li>
                        ))
                    }
                </ul>

                {
                    service?.link && <Link href={service?.link}>
                        <a aria-label={`Learn more on ${service?.title}`}>
                            Learn More <MdDoubleArrow />
                        </a>
                    </Link>
                }
            </div>
        </>
    )
}

export default Service;