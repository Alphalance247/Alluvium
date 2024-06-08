import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/webinar.module.scss";

const Webinar = () => {
  return (
    <>
      <div className={` ${styles.webinarbanner}`}>
        <div className="row container mx-auto"></div>

        <div className={`row container mx-auto ${styles.visitbanner}`}>
          <div className="col-md-6">
            <div className="" style={{ paddingTop: "65px" }}>
              <h1
                className="text-white"
                style={{
                  fontSize: "40px",
                  lineHeight: "60px",
                  marginBottom: "30px",
                }}
              >
                Enhance Your Jira Service Management Skills!
              </h1>
              <p
                className="text-white"
                style={{ fontSize: "18px", marginBottom: "40px" }}
              >
                Join our webinar for exclusive Atlassian lightning talks. Gain
                in-depth insights, expert tips, live demos, and more. Click here
                to learn more!
              </p>

              <Link href="/jsm-webinar">
                <a
                  className="btn text-white"
                  style={{ backgroundColor: "#E37915" }}
                >
                  Watch webinars
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <Image width={479} height={339} src="/assets/jiraimg.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
