import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/webinar.module.scss";

const Webinar = () => {
  return (
    <>

      <div className={` ${styles.webinarbanner}`}>

        <div className="row container mx-auto">
        </div>

        <div className={`row container mx-auto ${styles.visitbanner}`}>

          <div className="col-md-6">
          <h1 className="text-white">Enhance Your Jira Service Management Skills!</h1>
            <p className="text-white">Join our webinar for exclusive Atlassian lightning talks. Gain in-depth insights, expert tips, live demos, and more. Click here to learn more!</p>
            <Link href={'/'}>
              <a className="btn btn-warning">
                Watch webinars
              </a>
            </Link>
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
