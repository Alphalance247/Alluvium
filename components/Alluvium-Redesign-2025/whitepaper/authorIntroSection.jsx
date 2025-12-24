import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/authorIntro.module.scss";
import { useState } from "react";

const AuthorIntroSection = ({ dowloadLink }) => {
  const [copied, setCopied] = useState(false);
  const WHITEPAPER_BANNER_IMAGE =
    "/assets/redesign-2025/whitepaper/pdf-cover.png"; // TODO: swap with the provided banner asset
  const WHITEPAPER_DOWNLOAD_LINK = "/files/white-paper-pdf.pdf" | dowloadLink; // TODO: replace with actual whitepaper link

  const handleShare = async () => {
    try {
      const currentUrl = window.location.href;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WHITEPAPER_DOWNLOAD_LINK;
    link.download = "Regulatory-Supremacy-and-Competitive-Edge.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    // Download the PDF for printing
    const link = document.createElement("a");
    link.href = WHITEPAPER_DOWNLOAD_LINK;
    link.download = "Regulatory-Supremacy-and-Competitive-Edge.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optionally open print dialog after a short delay
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const share = [
    {
      id: "download",
      content: "Download",
      img: "/assets/redesign-2025/whitepaper/1.svg",
      action: handleDownload,
    },
    {
      id: "print",
      content: "Print",
      img: "/assets/redesign-2025/whitepaper/2.svg",
      action: handlePrint,
    },
    {
      id: "share",
      content: copied ? "Copied!" : "Share",
      img: "/assets/redesign-2025/whitepaper/3.svg",
      action: handleShare,
    },
  ];
  return (
    <div className={styles.heading__setion}>
      <div className={styles.name__section}>
        <p className={styles?.title}>
          {" "}
          <span className={styles.sub}>By:</span> Taiwo Ojo, CEO, Alluvium
        </p>
        <p className={styles?.title}>
          <span className={styles.sub}>Delivered By: </span>
          Alluvium, Atlassian Solution Partner with over 10,000 hours of
          Atlassian implementations every year and expertise with Financial
          Services globally
        </p>
      </div>

      <div className={styles?.share}>
        {share?.map((el, i) => (
          <div
            key={i}
            className={`${styles?.icons} text-center `}
            style={{ cursor: "pointer" }}
            onClick={el.action}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                el.action();
              }
            }}
          >
            <Image
              src={el?.img || ""}
              width={48}
              height={48}
              alt={el?.content}
            />
            <p className=" ">{el?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AuthorIntroSection;
