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
  const verify__payment_url = `https://vast.ec2.alluvium.net/cloud-connect/verify-payment/`;
  const [post, setPost] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showFeedbackForm, setShowFeedForm] = useState(false);
  const { addToast } = useToasts();

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleRecommendationChange = (e) => {
    setRecommendation(e.target.value);
  };

  const handleSubmitForm = async () => {
    setSubmitting(true);
    const feedbackForm = {
      rate_1: rating,
      suggestions_2: suggestion,
      recommend_3: recommendation,
    };
    try {
      const res = await axios.post(
        `https://vast.ec2.alluvium.net/cloud-connect/feedback-form`,
        feedbackForm
      );
      addToast(`${res.data.message}`, {
        appearance: "success",
      });
      setRating("");
      setRecommendation("");
      setSuggestion("");
      setShowFeedForm(false);
    } catch (error) {
      addToast(error || "Error occured, please try again", {
        appearance: "error",
      });
    } finally {
      setSubmitting(true);
    }
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFeedForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

            {showFeedbackForm && (
              <div className={`${styles.feedback}`}>
                <div className={`${styles.feedback_header}`}>
                  <span className={styles.title}>
                    We'd love to hear your feedback
                  </span>
                  <div onClick={() => setShowFeedForm(false)}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.85403 9.14625C9.90048 9.19271 9.93733 9.24786 9.96247 9.30855C9.98762 9.36925 10.0006 9.4343 10.0006 9.5C10.0006 9.5657 9.98762 9.63075 9.96247 9.69145C9.93733 9.75214 9.90048 9.80729 9.85403 9.85375C9.80757 9.90021 9.75242 9.93705 9.69173 9.9622C9.63103 9.98734 9.56598 10.0003 9.50028 10.0003C9.43458 10.0003 9.36953 9.98734 9.30883 9.9622C9.24813 9.93705 9.19298 9.90021 9.14653 9.85375L5.00028 5.70687L0.854028 9.85375C0.760208 9.94757 0.63296 10.0003 0.500278 10.0003C0.367596 10.0003 0.240348 9.94757 0.146528 9.85375C0.0527077 9.75993 2.61548e-09 9.63268 0 9.5C-2.61548e-09 9.36732 0.0527077 9.24007 0.146528 9.14625L4.2934 5L0.146528 0.85375C0.0527077 0.759929 -9.88558e-10 0.632681 0 0.5C9.88558e-10 0.367318 0.0527077 0.24007 0.146528 0.14625C0.240348 0.0524292 0.367596 -0.000278472 0.500278 -0.000278473C0.63296 -0.000278474 0.760208 0.0524292 0.854028 0.14625L5.00028 4.29312L9.14653 0.14625C9.24035 0.0524292 9.3676 -0.000278476 9.50028 -0.000278473C9.63296 -0.00027847 9.76021 0.0524292 9.85403 0.14625C9.94785 0.24007 10.0006 0.367318 10.0006 0.5C10.0006 0.632681 9.94785 0.759929 9.85403 0.85375L5.70715 5L9.85403 9.14625Z"
                        fill="#595959"
                      />
                    </svg>
                  </div>
                </div>

                <div className={`${styles.feedback_body}`}>
                  <div className={`${styles.experience}`}>
                    <label className={styles.rating_label}>
                      How would you rate your experience?
                    </label>
                    <div className={styles.rating_options}>
                      <input
                        type="radio"
                        id="rate-1"
                        name="rating"
                        value="1"
                        checked={rating === "1"}
                        onChange={handleRatingChange}
                      />
                      <label htmlFor="rate-1">1</label>
                      <input
                        type="radio"
                        id="rate-2"
                        name="rating"
                        value="2"
                        checked={rating === "2"}
                        onChange={handleRatingChange}
                      />
                      <label htmlFor="rate-2">2</label>
                      <input
                        type="radio"
                        id="rate-3"
                        name="rating"
                        value="3"
                        checked={rating === "3"}
                        onChange={handleRatingChange}
                      />
                      <label htmlFor="rate-3">3</label>
                      <input
                        type="radio"
                        id="rate-4"
                        name="rating"
                        value="4"
                        checked={rating === "4"}
                        onChange={handleRatingChange}
                      />
                      <label htmlFor="rate-4">4</label>
                      <input
                        type="radio"
                        id="rate-5"
                        name="rating"
                        value="5"
                        checked={rating === "5"}
                        onChange={handleRatingChange}
                      />
                      <label htmlFor="rate-5">5</label>
                    </div>
                    <div className={styles.rating_scale}>
                      <span style={{ fontWeight: "normal" }}>Very poor</span>
                      <span style={{ fontWeight: "normal" }}>Excellent</span>
                    </div>
                  </div>

                  <div className={styles.suggestion}>
                    <label htmlFor="">Any suggestions for improvement?</label>
                    <textarea
                      value={suggestion}
                      onChange={handleSuggestionChange}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className={styles.recommendation}>
                    <h3>Would you recommend this event to others?</h3>
                    <div className={styles.options}>
                      <label className={styles.option}>
                        <input
                          type="radio"
                          name="recommend"
                          value="Yes"
                          checked={recommendation === "Yes"}
                          onChange={handleRecommendationChange}
                        />
                        Yes
                      </label>
                      <label className={styles.option}>
                        <input
                          type="radio"
                          name="recommend"
                          value="Maybe"
                          checked={recommendation === "Maybe"}
                          onChange={handleRecommendationChange}
                        />
                        Maybe
                      </label>
                      <label className={styles.option}>
                        <input
                          type="radio"
                          name="recommend"
                          value="No"
                          checked={recommendation === "No"}
                          onChange={handleRecommendationChange}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleSubmitForm}
                  className={styles.feedback_btn_container}
                >
                  <Button
                    variant="default"
                    disabled={
                      (suggestion && rating && recommendation).length === 0
                    }
                    className={styles.feedback_btn}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Verify;
