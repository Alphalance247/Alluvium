import styles from "../../styles/eventpage.module.scss";
import Image from "next/image";

const Modal = ({ onClose, modalData }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
        <div className={styles.biodata}>
        <div onClick={onClose} className={styles.imgModal}>
          <Image
            src="/cloudImg/close.png"
            height={"10px"}
            width={"10px"}
            alt="close modal"
          />
        </div>
          <div className="d-none d-lg-block">
            <Image src={modalData.src} width={740} height={794} alt={modalData.name} />
          </div>
          <div className="bio">
            <div className="d-lg-none">
              <Image src={modalData.src} width={740 / 4} height={794 / 4} alt={modalData.name} />
            </div>
            <h3 className="m-0">{modalData.name}</h3>
            <h4 className="">{modalData.content}</h4>
            {
              modalData.bio.map(info => (
                <p key={info}>{info}</p>
              ))
            }
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
