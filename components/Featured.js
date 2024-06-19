import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero-carousel.module.scss";
export default function () {
    return (
        <>
<div className={` row ${styles.customxs}`}>
            <div className="col-md-1">

            </div>
        <div className={`${styles.featured} bg-white p-4 col-md-10`}>
                    <h3 className={`${styles.featuredsec} text-xl font-bold` }>FEATURED SECTION</h3>
                    <div className="row container mx-auto">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/serv.png" />
        </div>
        <div className="ml-2">
          <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>OUR SERVICES</p>
          
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/camp.png" />
        </div>
        <div className="ml-2">
        <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>CAMPAIGN</p>
          
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/case.png" />
        </div>
        <div className="ml-2">
        <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>CASE STUDIES</p>
        </div>
      </div>
    </div>
        </div>
        <div className="col-md-1">

        </div>
        </div>
        </>
    )
}