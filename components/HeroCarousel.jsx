// import Slider from "./Slider";
import Slider from "react-slick";
import Hero from "./Hero";
import AtPartner from "./AtPartner";
import styles from "../styles/hero-carousel.module.scss";
import heroStyles from "../styles/hero.module.scss";
import Badges from "./badges";
import EventHero from "./cloud-connect/EventHero";
import Team24Banner from "./TEAM24/banner";
import Gitex24 from "components/gitex24/gitex";
import Webinar from "components/webinar/webinar";
import CommunityEvent from "./hero-component/communityEvent";
import CloudConnectBanner from "./EventBanner/cloudConnectBanner";
import GitexGlobal24 from "./EventBanner/GitexGlobal";
import AtlassianCampaign from "./EventBanner/AtlassianCampaign";

export default function () {
  return (
    <>
      <div className="container-fluid p-0">
        <Slider
          speed={3000}
          autoplaySpeed={7000}
          arrows={false}
          dots={false}
          autoplay={true}
          pauseOnHover={false}
          pauseOnFocus={false}
          infinite={true}
        >
          {/* <CommunityEvent /> */}
          <AtPartner />
          <AtlassianCampaign />
          {/* <CloudConnectBanner /> */}

          {/* <GitexGlobal24 /> */}
          {/* this <Webinar /> */}
          {/* this <Hero /> */}
          {/* <Team24Banner /> */}
          {/* <Gitex24 /> */}
          {/* <Boot53 /> */}
          {/* <Team24Banner /> */}
          {/* <EventHero showCountdown={false} /> */}

          {/* this <div className="container-fluid p-0">
            <div className={`${styles.h2}`}>
              <h1>Let’s take you to the Cloud</h1>
              <div className={styles.blue}>
                <h2>We are trusted Cloud and DevOps Experts</h2>
              </div>
              <div className="row mt-3 d-none d-sm-block">
                <div className="col-lg-8 mx-auto">
                  <div
                    className={`${heroStyles.badges_container} mt-5 mt-sm-4 d-none d-sm-block`}
                  >
                    <Badges />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* this <div>
            <div className={`${styles.h3}`}>
              <div className={styles.top}>
                <h1>We are AI</h1>
                <h1 className={styles.head2}>experts</h1>
                <div className={styles.blue}>
                  <h2>How can AI help you?</h2>
                </div>
              </div>
              <div className="row mt-5 d-none d-sm-block">
                <div className="col-lg-9 col-xl-8">
                  <div
                    className={`${heroStyles.badges_container} mt-5 mt-sm-4 d-none d-sm-block`}
                  >
                    <Badges />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </>
  );
}
