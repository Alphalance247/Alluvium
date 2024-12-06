import Layout from "components/cloud-connect-2/Layout";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../../../styles/cloud-connect-2/event-feedback/eventFeedback.module.scss";
import Button from "components/cloud-connect-2/Button";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const option = {
  very_satisfied: "Very satisfied",
  not_very_satisfied: "Not very satisfied",
  neutral: "Neutral",
  not_attend: "Did not attend",
  not_relevant: "Not relevant",
  relevant: "Relevant",
  very_relevant: "Very Relevant",
};

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    satisfaction: "",
    relevance: "",
    takeaways: "",
    topicRelevance: "",
    speakerRating: "",
    suggestions: "",
    venueRating: "",
    resourcesRating: "",
    networkingRating: "",
    overallFeedback: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { addToast } = useToasts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name_1: feedback.name,
      email_2: feedback.email,
      event_satisfaction_3: option[feedback.satisfaction],
      job_relevance_4: option[feedback.relevance],
      take_away_6: feedback.takeaways,
      speakers_rate_10: option[feedback.speakerRating],
      overall_feedback_15: feedback.overallFeedback,
      suggestion_11: feedback.suggestions,
      network_collab_rate_14: option[feedback.networkingRating],
      venue_12: option[feedback.venueRating],
      technical_resource_13: option[feedback.resourcesRating],
      first_panel_8: option[feedback.topicRelevance],
    };

    try {
      const res = await axios.post(
        `https://vast.ec2.alluvium.net/cloud-connect/cloud-post-event-feedback-form`,
        formData
      );
      addToast(`${res.data.message}`, {
        appearance: "success",
      });
      setFeedback({
        name: "",
        email: "",
        satisfaction: "",
        relevance: "",
        takeaways: "",
        topicRelevance: "",
        speakerRating: "",
        suggestions: "",
        venueRating: "",
        resourcesRating: "",
        networkingRating: "",
        overallFeedback: "",
      });
    } catch (error) {
      addToast(error || "Error occured, please try again", {
        appearance: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Event Feedback | Cloud Connect 2024</title>
      </Head>
      <div className={styles.heroSection}>
        <img
          src={"/assets/cloud-connect/images/logo.png"}
          alt="Cloud connect logo"
          className={styles.heroLogo}
        />
      </div>
      <div className={styles.section1}>
        <h3>
          Thank you for Joining Us,We <br /> Value Your Feedback!
        </h3>
        <p>
          Share your thoughts about the event. help us grow and serve you better
        </p>
      </div>
      <div className={styles.section2}>
        <div className={styles.feedbackForm}>
          <form onSubmit={handleSubmit} action="">
            <div className={styles.detail}>
              <div className={styles.inputDiv}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={feedback.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  name="email"
                  value={feedback.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.question}>
              <h3>
                1.How satisfied were you with the event?{" "}
                <span>Select one option.</span>{" "}
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="satisfaction"
                    value="very_satisfied"
                    checked={feedback.satisfaction === "very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Very satisfied
                </label>
                <label>
                  <input
                    type="radio"
                    name="satisfaction"
                    value="neutral"
                    checked={feedback.satisfaction === "neutral"}
                    onChange={handleChange}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="satisfaction"
                    value="not_very_satisfied"
                    checked={feedback.satisfaction === "not_very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Not very satisfied
                </label>
              </div>
            </div>

            <div className={styles.question}>
              <h3>
                2.How relevant and helpful do you think it was for your job?{" "}
                <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="relevance"
                    value="very_satisfied"
                    checked={feedback.relevance === "very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Very satisfied
                </label>
                <label>
                  <input
                    type="radio"
                    name="relevance"
                    value="neutral"
                    checked={feedback.relevance === "neutral"}
                    onChange={handleChange}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="relevance"
                    value="not_very_satisfied"
                    checked={feedback.relevance === "not_very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Not very satisfied
                </label>
              </div>
            </div>

            <div className={styles.question3}>
              <h3>3.What were your key take Away from the event ?</h3>
              <textarea
                name="takeaways"
                value={feedback.takeaways}
                onChange={handleChange}
              />
            </div>

            <div className={styles.question}>
              <h3>
                4.How relevant was the topics or sessions to you?{" "}
                <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="topicRelevance"
                    value="not_relevant"
                    onChange={handleChange}
                    checked={feedback.topicRelevance === "not_relevant"}
                  />{" "}
                  Not Relevant
                </label>
                <label>
                  <input
                    type="radio"
                    name="topicRelevance"
                    value="relevant"
                    onChange={handleChange}
                    checked={feedback.topicRelevance === "relevant"}
                  />{" "}
                  Relevant
                </label>
                <label>
                  <input
                    type="radio"
                    name="topicRelevance"
                    value="very_relevant"
                    onChange={handleChange}
                    checked={feedback.topicRelevance === "very_relevant"}
                  />{" "}
                  Very Relevant
                </label>
                <label>
                  <input
                    type="radio"
                    name="topicRelevance"
                    value="not_attend"
                    onChange={handleChange}
                    checked={feedback.topicRelevance === "not_attend"}
                  />{" "}
                  Did not attend
                </label>
              </div>
            </div>

            <div className={styles.question}>
              <h3>
                5.Rate the speakers' effectiveness and knowledge
                <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="speakerRating"
                    onChange={handleChange}
                    checked={feedback.speakerRating === "not_very_satisfied"}
                    value="not_very_satisfied"
                  />{" "}
                  Not very Satisfactory
                </label>
                <label>
                  <input
                    type="radio"
                    name="speakerRating"
                    onChange={handleChange}
                    checked={feedback.speakerRating === "neutral"}
                    value="neutral"
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="speakerRating"
                    onChange={handleChange}
                    checked={feedback.speakerRating === "very_satisfied"}
                    value="very_satisfied"
                  />{" "}
                  Very Satisfactory
                </label>
              </div>
            </div>

            <div className={styles.question3}>
              <h3>6.Suggestions for additional topics or sessions.</h3>
              <textarea
                type="text"
                name="suggestions"
                placeholder="Suggest additional topics/sessions"
                value={feedback.suggestions}
                onChange={handleChange}
              />
            </div>

            <div className={styles.question}>
              <h3>
                7.How would you rate the venue or online platform?
                <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="venueRating"
                    value="not_very_satisfied"
                    checked={feedback.venueRating === "not_very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Not very Satisfactory
                </label>
                <label>
                  <input
                    type="radio"
                    name="venueRating"
                    value="neutral"
                    checked={feedback.venueRating === "neutral"}
                    onChange={handleChange}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="venueRating"
                    value="very_satisfied"
                    checked={feedback.venueRating === "very_satisfied"}
                    onChange={handleChange}
                  />{" "}
                  Very Satisfactory
                </label>
              </div>
            </div>

            <div className={styles.question}>
              <h3>
                8.How would you rate the technical resources (audio/video,
                slides, <br />
                demos) satisfactory?
                <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="resourcesRating"
                    value="not_very_satisfied"
                    onChange={handleChange}
                    checked={feedback.resourcesRating === "not_very_satisfied"}
                  />{" "}
                  Not very Satisfactory
                </label>
                <label>
                  <input
                    type="radio"
                    name="resourcesRating"
                    value="neutral"
                    onChange={handleChange}
                    checked={feedback.resourcesRating === "neutral"}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="resourcesRating"
                    value="very_satisfied"
                    onChange={handleChange}
                    checked={feedback.resourcesRating === "very_satisfied"}
                  />{" "}
                  Very Satisfactory
                </label>
              </div>
            </div>

            <div className={styles.question}>
              <h3>
                9.How would you rate the opportunities for networking or <br />
                collaboration ? <span>Select one option.</span>
              </h3>
              <div className={styles["radio-group"]}>
                <label>
                  <input
                    type="radio"
                    name="networkingRating"
                    value="not_very_satisfied"
                    onChange={handleChange}
                    checked={feedback.networkingRating === "not_very_satisfied"}
                  />{" "}
                  Not very Satisfactory
                </label>
                <label>
                  <input
                    type="radio"
                    name="networkingRating"
                    value="neutral"
                    onChange={handleChange}
                    checked={feedback.networkingRating === "neutral"}
                  />{" "}
                  Neutral
                </label>
                <label>
                  <input
                    type="radio"
                    name="networkingRating"
                    value="very_satisfied"
                    onChange={handleChange}
                    checked={feedback.networkingRating === "very_satisfied"}
                  />{" "}
                  Very Satisfactory
                </label>
              </div>
            </div>

            <div className={styles.question3}>
              <h3>10.Any overall feedback for the event?</h3>
              <textarea
                type="text"
                name="overallFeedback"
                value={feedback.overallFeedback}
                onChange={handleChange}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
              className="buttonContainer"
            >
              <Button className={styles.submitButton}>
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
