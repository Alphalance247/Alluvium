import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/cloud-connect-2/Media/media.module.scss";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";
import ImageModal from "components/cloud-connect-2/Media/ImageModal";

const images = [
  "/assets/cloud-connect/images/cc23/Image.png",
  "/assets/cloud-connect/images/cc23/Image-1.png",
  "/assets/cloud-connect/images/cc23/Image-2.png",
  "/assets/cloud-connect/images/cc23/Image-3.png",
  "/assets/cloud-connect/images/cc23/Image-4.png",
  "/assets/cloud-connect/images/cc23/Image-5.png",
  "/assets/cloud-connect/images/cc23/Image-6.png",
  "/assets/cloud-connect/images/cc23/Image-7.png",
  "/assets/cloud-connect/images/cc23/Image-8.png",
  "/assets/cloud-connect/images/cc23/Image-9.png",
  "/assets/cloud-connect/images/cc23/Image-10.png",
  "/assets/cloud-connect/images/cc23/Image-11.png",
  "/assets/cloud-connect/images/cc23/Image-12.png",
  "/assets/cloud-connect/images/cc23/Image-13.png",
  "/assets/cloud-connect/images/cc23/Image-14.png",
  "/assets/cloud-connect/images/cc23/Image-15.png",
  "/assets/cloud-connect/images/cc23/Image-16.png",
  "/assets/cloud-connect/images/cc23/Image-17.png",
  "/assets/cloud-connect/images/cc23/Image-18.png",
  "/assets/cloud-connect/images/cc23/Image-19.png",
  "/assets/cloud-connect/images/cc23/Image-20.png",
  "/assets/cloud-connect/images/cc23/Image-21.png",
  "/assets/cloud-connect/images/cc23/Image-22.png",
  "/assets/cloud-connect/images/cc23/Image-23.png",
];

export default function Media() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const renderImageRow = (start, end) => {
    const rowImages = images.slice(start, end);
    const isMultipleImages = rowImages.length > 1;
    const rowHeight = isMobile ? 300 : isMultipleImages ? 362 : 480;
    const imageWidth = isMobile
      ? "100%"
      : isMultipleImages
      ? `calc((100% - ${(rowImages.length - 1) * 4}px) / ${rowImages.length})`
      : "100%";

    return (
      <div
        className={styles.imageRow}
        style={{
          height: isMobile ? "auto" : `${rowHeight}px`,
          marginBottom: "4px",
        }}
      >
        {rowImages.map((src, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            style={{
              width: imageWidth,
              height: isMobile ? "240px" : "100%",
              marginRight:
                !isMobile && index < rowImages.length - 1 ? "4px" : "0",
            }}
            onClick={() => openModal(start + index)}
          >
            <img
              src={src}
              alt={`Cloud Connect image ${start + index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>Media | Cloud Connect 2024</title>
      </Head>
      <section className={styles.mediaSection}>
        <SectionHeader heading="Media" />
      </section>
      <section className={styles.mediaContent}>
        <div className={styles.container}>
          <h3 className={styles.mediaHeading}>Cloud connect '23</h3>
          <div className={styles.imageContainer}>
            {renderImageRow(0, 3)} {/* row of 3 images */}
            {renderImageRow(3, 6)} {/* row of 3 images */}
            {renderImageRow(6, 7)} {/* row of 1 image */}
            {renderImageRow(7, 11)} {/* row of 4 images */}
            {renderImageRow(11, 14)} {/* row of 3 images */}
            {renderImageRow(14, 15)} {/* row of 1 image */}
            {renderImageRow(15, 20)} {/* row of 5 images */}
            {renderImageRow(20, 24)} {/* row of 4 images */}
          </div>
        </div>
      </section>
      {modalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onPrev={goToPrevious}
          onNext={goToNext}
        />
      )}
    </Layout>
  );
}
