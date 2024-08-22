import React from "react";
import Slider from "react-slick";
import { atlassianToolsImage } from "data";
import Image from "next/image";
import styles from "../../styles/atlassian-services-style/atlassianlicenceservices.module.scss";
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        {atlassianToolsImage.map((item) => (
          <div
            className={styles.autplayimg}
            style={{ marginBottom: "10rem" }}
            key={item.id}
          >
            <div>
              <Image src={item.imgChoose} width={90} height={90} alt="tools" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
