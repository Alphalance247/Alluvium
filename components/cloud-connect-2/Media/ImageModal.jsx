import React, { useState, useCallback, useEffect } from "react";
import styles from "../../../styles/cloud-connect-2/Media/media.module.scss";

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const preventScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div
      className={styles.modal}
      onWheel={preventScroll}
      onTouchMove={preventScroll}
    >
      <div className={styles.topBar}>
        <div className={styles.flexBetween}>
          <div>
            <button onClick={zoomIn} title="Zoom In">
              <img
                src="/assets/cloud-connect/icons/basil_zoom-in-outline.svg"
                alt="Zoom In"
                width={isMobile ? "24" : "32"}
                height={isMobile ? "24" : "32"}
              />
            </button>

            <span className={styles.zoomLevel}>{Math.round(scale * 100)}%</span>
            <button onClick={zoomOut} title="Zoom Out">
              <svg
                width={isMobile ? "24" : "32"}
                height={isMobile ? "24" : "32"}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2666 12.6C10.0014 12.6 9.74703 12.7054 9.5595 12.8929C9.37196 13.0804 9.2666 13.3348 9.2666 13.6C9.2666 13.8652 9.37196 14.1196 9.5595 14.3071C9.74703 14.4947 10.0014 14.6 10.2666 14.6H16.9333C17.1985 14.6 17.4528 14.4947 17.6404 14.3071C17.8279 14.1196 17.9333 13.8652 17.9333 13.6C17.9333 13.3348 17.8279 13.0804 17.6404 12.8929C17.4528 12.7054 17.1985 12.6 16.9333 12.6H10.2666Z"
                  fill={scale === 0.5 ? "#8C8C8C" : "#F0F0F0"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.19887 19.9267C8.76439 21.4919 10.8519 22.4252 13.0622 22.5482C15.2726 22.6712 17.4507 21.9752 19.1802 20.5933L26.0549 27.468C26.1464 27.5662 26.2568 27.645 26.3795 27.6997C26.5021 27.7544 26.6346 27.7837 26.7688 27.7861C26.9031 27.7885 27.0365 27.7638 27.161 27.7135C27.2855 27.6632 27.3986 27.5883 27.4936 27.4934C27.5885 27.3984 27.6634 27.2853 27.7137 27.1608C27.764 27.0363 27.7887 26.9029 27.7863 26.7686C27.784 26.6344 27.7546 26.5019 27.6999 26.3793C27.6453 26.2566 27.5665 26.1462 27.4682 26.0547L20.5949 19.18C21.6797 17.8224 22.3483 16.1799 22.5201 14.4507C22.6919 12.7214 22.3595 10.9795 21.563 9.435C20.7664 7.89056 19.5399 6.60968 18.0314 5.74701C16.5229 4.88434 14.797 4.47675 13.0619 4.57346C11.3269 4.67017 9.65691 5.26704 8.25363 6.292C6.85035 7.31697 5.77376 8.72622 5.15382 10.3496C4.53388 11.973 4.39709 13.7412 4.75999 15.4406C5.12288 17.14 5.96992 18.6981 7.19887 19.9267ZM8.6122 8.612C7.2985 9.92393 6.55976 11.704 6.55851 13.5606C6.55726 15.4172 7.2936 17.1983 8.60554 18.512C9.91747 19.8257 11.6975 20.5644 13.5542 20.5657C15.4108 20.5669 17.1918 19.8306 18.5055 18.5187L18.5122 18.512L18.5175 18.5053C19.7919 17.1843 20.4964 15.4157 20.4793 13.5803C20.4623 11.7449 19.725 9.98968 18.4264 8.6926C17.1277 7.39552 15.3716 6.6604 13.5362 6.64558C11.7008 6.63075 9.93297 7.3374 8.61354 8.61333"
                  fill={scale === 0.5 ? "#8C8C8C" : "#F0F0F0"}
                />
              </svg>
            </button>
          </div>

          {!isMobile && (
            <button onClick={toggleFullscreen} title="Toggle Fullscreen">
              <img
                src="/assets/cloud-connect/icons/ion_expand.svg"
                alt="Fullscreen"
                width="32"
                height="32"
              />
            </button>
          )}
        </div>

        <button onClick={onClose} title="Close" className={styles.closeBtn}>
          <img
            src="/assets/cloud-connect/icons/Close.svg"
            alt="Close"
            width={isMobile ? "24" : "32"}
            height={isMobile ? "24" : "32"}
          />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.imageContainer}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        <button className={styles.navButton} onClick={onPrev}>
          <img
            src="/assets/cloud-connect/icons/Left arrow.svg"
            alt="Previous"
            width={isMobile ? "24" : "32"}
            height={isMobile ? "24" : "32"}
          />
        </button>
        <button className={styles.navButton} onClick={onNext}>
          <img
            src="/assets/cloud-connect/icons/Right arrow.svg"
            alt="Next"
            width={isMobile ? "24" : "32"}
            height={isMobile ? "24" : "32"}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
