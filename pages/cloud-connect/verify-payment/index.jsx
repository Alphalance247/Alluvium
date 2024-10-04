import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import LoadingScreen from "components/loading";
import Layout from "components/cloud-connect-2/Layout";
import Head from "next/head";
import styles from "../../../styles/cloud2.4/successscreen.module.scss";
import Image from "next/image";
import Button from "components/cloud-connect-2/Button";
import Link from "next/link";

const Verify = () => {
  const [post, setPost] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const verify__payment_url = `https://vast.ec2.alluvium.net/cloud-connect/verify-payment/`;
  useEffect(() => {
    if (!router.isReady) return;
    const payment__reference = router.query.reference;

    const VerifyPayment = async (ref) => {
      setLoading(true);
      await axios
        .get(verify__payment_url + ref)
        .then((res) => {
          setLoading(false);
          if (res.status >= 200 && res.status < 300) {
            setPost(true);
          } else {
            router.push("/cloud-connect/book-a-ticket/contact-details");
            setPost("Error occured, please try again or contact Admin");
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          let errMessage =
            "Oops something went wrong. Please try again or contact Admin";
          if (err?.response?.status < 500) {
            errMessage =
              err?.response?.data?.error ||
              "Oops something went wrong. Please try again or contact Admin";
          }
          return;
        });
    };

    VerifyPayment(payment__reference);
  }, [router.isReady, router.query]);

  return (
    <Layout>
      <Head>
        <title>Verify Payment | Cloud Connect 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <LoadingScreen message="verifying payment status" />
      ) : (
        <>
          <div className={`container-fluid ${styles.success__screen__style}`}>
            <div className="container text-center">
              <Image
                src="/assets/connect2.4/success.svg"
                width={64}
                height={64}
                alt="checked"
              />
              <h2>Thank you for your purchase!</h2>
              <p>
                Your payment has been processed successfully, and your ticket is
                confirmed. We’ve sent a confirmation email with your ticket
                details and receipt, please check your inbox (and spam folder)
                for that information.
              </p>
              <div className={styles.btn}>
                <Link href="/cloud-connect">
                  <Button variant="default">Back to Home</Button>
                </Link>
                <Button variant="tertiary">
                  <a href="https://mail.google.com" target="_blank">
                    Go to Gmail
                  </a>
                </Button>
              </div>
              <p>Share event</p>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/share/p/EtvS9z3NU4YdBH2P/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/cloud-connect/icons/FB.svg"
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https://x.com/alluviumhq/status/1826602060789547017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/cloud-connect/icons/X.svg"
                    alt="twitter"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.linkedin.com/posts/alluvium-hq_cloud-connect-24-activity-7232364227338883073-zNv8?utm_source=share&utm_medium=member_ios"
                  target="_blank"
                >
                  <Image
                    src="/assets/cloud-connect/icons/Linkedin.svg"
                    alt="Linkedin"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://www.instagram.com/p/C--b4knqFtQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/cloud-connect/icons/Instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Verify;
