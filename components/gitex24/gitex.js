import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/gitex24.module.scss";

const Gitex24 = () => {
  return (
    <>
      <div className={` ${styles.gitexbanner}`}>

        <div className="row container mx-auto">
          <div className="col-md-4">
            <Image width={398} height={113} src="/assets/gitex24/gafrica.png" />
          </div>
          <div className="col-md-4 text-center">
            <Image width={32} height={40} src="/assets/gitex24/x.png" />
            {/* <h1 className="text-black">X</h1> */}
          </div>
          <div className="col-md-4">
            <Image width={221} height={50} src="/assets/gitex24/alluvium.png" />
          </div>
        </div>

        <div className={`row container mx-auto ${styles.visitbanner}`}>

          <div className="col-md-6">
            <Image width={443} height={147} src="/assets/gitex24/visit.png" />
            <Link href={'/event/gitex24'} className="btn btn-warning">
              
                CLAIM SOUVENIRS
              
            </Link>
          </div>
          <div className="col-md-6">
            <Image width={479} height={339} src="/assets/gitex24/3gele.png" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Gitex24;
