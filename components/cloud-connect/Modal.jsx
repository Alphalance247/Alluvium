import styles from "../../styles/eventpage.module.scss";

const Modal = ({ guestData, onClose, modaltoShow }) => {
  return (
    <div className={styles.modal}>
      {/* <div className={styles.background}></div> */}
      {/* {modaltoShow.name === "Tala Saleh" && ( */}
      <div className={styles.popup}>
        <div onClick={onClose}>
          <img
            src="/cloudImg/close.png"
            className={styles.imgModal}
            height={"10px"}
            width={"10px"}
            alt="close modal"
          />
        </div>
        <div className={styles.biodata}>
          <img src={guestData[0].src} className={styles.modalPic} alt="" />
          <div className="bio">
            <h3>Tyler Venable</h3>
            <h4>E7 Solutions, LLC, System Administrator</h4>
            <p>
              Digital nomad, global explorer, and tech connector – I’m on a
              mission to bridge businesses with unparalleled tech expertise.
              Exploring the world one city at a time, uncovering tech brilliance
              everywhere I go. Leading talent, staffing and operations across
              three innovative companies., I'm here to connect companies with
              the game-changing talent they need. My business? Making yours
              succeed.
            </p>
            <p>
              🌐 Atlas Bench: Connecting Atlassian Talent & OrganizationsWe've
              sourced the best Atlassian talent, so you don't have to. Our
              experts are ready to join your journey. Explore Atlas Bench:
              https://atlas-bench.com/🌐 Await.ai: Your AI PartnerUnlock the
              potential of AI tailored to your needs. From concept to reality,
              await.ai is your go-to source for innovative solutions. Discover
              Await.ai: https://await.ai/hom
            </p>
            <p>
              🌐 AppsDelivered: Crafting Your Digital VisionNeed a tech genius
              for your project? AppsDelivered is here to turn your ideas into
              amazing applications. Fast, tailored, reliable.
            </p>
            <p>Visit AppsDelivered: https://appsdelivered.com/</p>
            <p>
              <span>♦</span> TALENT & TECHNOLOGY <span>♦</span> I believe in the
              power of the right fit. Your vision deserves someone who gets it.
              <span></span>
            </p>
            <p>
              From Atlassian to AI, our vetted experts are ready to join your
              mission. We find the talent you need quickly, precisely, and
              efficiently, often within a day or two.
            </p>
            <p>
              <span>♦</span> COMMUNITY LEADERSHIP <span>♦</span> I build bridges
              in the Atlassian community. Connections, knowledge, and
              inspiration fuel these vibrant networks. Join us. <span></span>
            </p>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
