import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import LoadingScreen from "components/loading";
import Layout from "components/cloud-connect-2/Layout";
import Head from "next/head";

const Verify = () => {
  const [post, setPost] = useState("");
  const router = useRouter();
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const verify__payment_url = `https://vast.ec2.alluvium.net/cloud-connect/verify-payment/`;
  useEffect(() => {
    if (!router.isReady) return;
    const payment__reference = router.query.reference;
    // "bj9j2ag25h"
    const VerifyPayment = async (ref) => {
      setLoading(true);
      await axios
        .get(verify__payment_url + ref)
        .then((res) => {
          setLoading(false);
          if (res.status >= 200 && res.status < 300) {
            addToast("Payment Successfully Verified, Thank you", {
              appearance: "success",
            });
            let res_data = res.data.message;
            console.log(res_data);
            setPost(res.data.message);
          } else {
            addToast(
              res.data.error ||
                "Error occured, please try again or contact Admin",
              { appearance: "error" }
            );
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
          addToast(errMessage, { appearance: "error" });
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
      <div>
        {loading && (
          <LoadingScreen message="Payment Verification in Progress...." />
        )}
        <h1>This is a Payment Verification Page</h1>

        <p>Yay 🎉🎉 {post}</p>
      </div>
    </Layout>
  );
};

export default Verify;
