import Head from "next/head";
import Image from "next/image";
import { getStaffUrls, getStaffData, fruits } from "../../lib/staff.ts";
import { productData } from "data";
import Services from "components/services-components/services";
import styles from "../../styles/staff.module.scss";
import { useEffect } from "react";
import Layout from "components/layout";

const StaffPage = ({ staffData, products, imagePath, fruitPath }) => {
  const getImagePath = (name) => {
    let names = name.split(" ");
    let smallName = names[0] + "_" + names[1];
    smallName = smallName.toLowerCase();
    return `/assets/about/staff-image/${smallName}.png`;
  };

  return (
    <Layout>
      <div className="container-fluid p-0">
        <Head>
          <title>About us | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.banner}>
            <div className={styles.info_holder_mobile}>
              <div className={styles.info}>
                <h1>
                  Hello! <br className="d-sm-none" /> I am {staffData.name}
                </h1>
                <div>
                  <p>{staffData.role}</p>
                  <p>{staffData.team} Team</p>
                </div>
              </div>
            </div>
            {/* <div className={styles.imageHolder} style={{ backgroundImage: 'url("/assets/about/staff-image/babade_adetise.png")' }}> */}
            <div className={styles.imageHolder}>
              <div style={{ backgroundImage: `url("${imagePath}")` }}></div>
              {/* <div className={styles.imageHolder} style={{ backgroundImage: 'url("/assets/about/staff-image/oyelakin.png")' }}> */}
              {/* <Image src="/assets/about/staff-image/oyelakin.png" quality={100} height={510.66} width={575} layout="responsive" priority /> */}
            </div>
            <div className={styles.right}>
              <div className={styles.info_holder}>
                <div className={styles.info}>
                  <h1>Hello ! I am {staffData.name}</h1>
                  <div>
                    <p>{staffData.role}</p>
                    <p>{staffData.team} Team</p>
                  </div>
                </div>
              </div>
              <div className={styles.descriptions}>
                <div className={styles.descriptions_body}>
                  <div className={styles.description_group}>
                    <h1>Personal</h1>
                    <div className={styles.description}>
                      <h2>If you were a fruit what would you be?</h2>
                      <div className={styles.fruit}>
                        <p>{staffData.fruit}</p>
                        <img
                          width="40px"
                          height="40px"
                          className="img-fluid img-responsive"
                          src={fruitPath}
                        />
                        {/* <img width='40px' height='40px' className="img-fluid img-responsive" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-guava-fruit-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" /> */}
                        {/* <Image src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-guava-fruit-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" quality={100} height={60} width={60} priority /> */}
                      </div>
                      <p>{staffData.q1}</p>
                    </div>
                    <div className={styles.description}>
                      <h2>When I&apos;m not working I enjoy - </h2>
                      <p>{staffData.q2}</p>
                    </div>
                  </div>
                  <div className={styles.description_group}>
                    <h1>Industry</h1>
                    <div className={styles.description}>
                      <h2>What is your expertise ?</h2>
                      <p>{staffData.q3}</p>
                    </div>
                    <div className={styles.description}>
                      <h2>What tools do you currently use well ?</h2>
                      <p>{staffData.q4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Services />
        </main>
      </div>
    </Layout>
  );
};

export default StaffPage;

export const getStaticProps = ({ params }) => {
  const staffData = getStaffData(params.staff);
  let names = staffData.name.split(" ");
  let smallName = names[0] + "_" + names[1];
  smallName = smallName.toLowerCase();
  let imagePath = `/assets/about/staff-image/${smallName}.png`;
  let fruitName = staffData.fruit?.toLowerCase();
  let fruitPath = fruits.includes(fruitName)
    ? `/assets/about/fruits/${fruitName}.png`
    : "";
  return {
    props: {
      staffData,
      imagePath,
      fruitPath,
      products: productData,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getStaffUrls();
  return {
    paths,
    fallback: false,
  };
};
