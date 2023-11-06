import styles from "../../styles/eventpage.module.scss";
import Modal from "./Modal";
import { useState } from "react";

const Speaker = () => {
  const [modal, setModal] = useState(false);
  const [modaltoShow, setModaltoShow] = useState(null);
  const guestData = [
    {
      id: 1,
      name: "Kevin Tuei",
      content:
        "Cloud Developer | Certified Educator | ALX Gold Fellow | AWS Community Builder | ODeL Coordinator | Atlassian Community Leader | Technology Mentor",
      src: "/cloudImg/1.png",
      alt: "Kevin Tuei",
    },
    {
      id: 2,
      name: "Hon Seun Fakuode",
      content: "Atlas Bench Head of Operations and Talent Solutions",
      src: "/cloudImg/2.png",
      alt: "Hon Seun Fakuode",
    },
    {
      id: 3,
      name: "Katarzyna Zofia Pawlak",
      content:
        "Chief Product Officer & Co-founder @Appsvio | Atlassian Marketplace Partner | 🙌 Jira, Confluence & Jira Service Management enthusiast | 🙌 Atlassian Community Leader",
      src: "/cloudImg/3.png",
      alt: "Katarzyna Zofia Pawlak",
      align: "top",
    },
    {
      id: 4,
      name: "Rodney Nissen",
      content: "Sr. Atlassian Toolsmith | Blogger | Atlassian Certified Expert",
      src: "/cloudImg/4.png",
      alt: "Rodney Nissen",
    },
    {
      id: 5,
      name: "Naj Irshrad",
      content: "CEO at Stack Intelligence",
      src: "/cloudImg/5.png",
      alt: "Naj Irshrad",
    },
    {
      id: 6,
      name: "Erica Larson",
      content:
        "People/Project/Process Leader, Atlassian Cloud Administrator, Atlassian Community Leader",
      src: "/cloudImg/6.png",
      alt: "Erica Larson",
    },
    // {
    //   id: 7,
    //   name: "Margaret Wang",
    //   content: "Dedicated to Sustainable Development through Education",
    //   src: "/cloudImg/mine7.jpg",
    //   alt: "Margaret Wang",
    // },
    // {
    //   id: 8,
    //   name: "Oluwaseun Fakuade",
    //   content:
    //     "Hon. Commissioner for Innovation Science and Digital Economy, Ekiti State",
    //   src: "/cloudImg/mine8.jpg",
    //   alt: "Oluwaseun Fakuade",
    // },
    {
      id: 9,
      name: "Samuel Desu Acheampong",
      content:
        "Samuel Kojo Desu Acheampong currently serves as the sales team lead for onpoint Africa.",
      src: "/cloudImg/9.png",
      alt: "Samuel Desu Acheampong",
    },
    {
      id: 10,
      name: "Olaniyan Remilekun",
      content:
        "Olaniyan Remilekun is an Artificial Intelligence Engineer and Data Scientist.",
      src: "/cloudImg/10.png",
      alt: "Olaniyan Remilekun",
    },
  ];

  const closeModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
    setModaltoShow(guestData);
  };

  return (
    <>
      <div className={styles.visitorsPage}>
        <div className={`container`}>
          <h1 className={styles.speakers}>Speakers</h1>
          <div className={styles.guest}>
            {guestData.map((guest) => {
              return (
                <div
                  className={styles.specific1}
                  key={guest.id}
                  // style={{ background: `url(${guest.src}), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(0,0,0,255) 100%)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: `${!!guest?.align ? 'center -30px' : "top"}` }}
                >
                  <div
                    className=""
                    style={{
                      background: `url(${guest.src})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: `${
                        !!guest?.align ? "center -30px" : "top"
                      }`,
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                  <div className={styles.specific}>
                    <h3>{guest.name}</h3>
                    <p>{guest.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          guestData={guestData}
          onClose={closeModal}
          modaltoShow={modaltoShow}
        />
      )}
    </>
  );
};

export default Speaker;
