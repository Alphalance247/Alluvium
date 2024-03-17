import styles from "../../styles/eventpage.module.scss";
import Modal from "./Modal";
import { useState } from "react";

const Speaker = () => {
  const [modalData, setModalData] = useState(null);
  const guestData = [
    {
      id: 1,
      name: "Kevin Tuei",
      content:
        "Cloud Developer | Certified Educator | ALX Gold Fellow | AWS Community Builder | ODeL Coordinator | Atlassian Community Leader | Technology Mentor",
      src: "/cloudImg/1.png",
      alt: "Kevin Tuei",
      bio: [
        "Kevin Tuei has seven years of experience as a Certified Trainer, Cloud Consultant, Mentor, and Fellow of the ALX Gold Fellowship. With expertise as a cloud consultant, Kevin helps clients move their on-premise workloads to the cloud. Over the past five years, he has helped thirty clients do precisely that, saving them an average of 78% on costs.",
        "Additionally, Kevin has organized over 20 ACE events and volunteers as an Atlassian Community Leader for Meru ACE in Kenya, which currently has over 500 members. He collaborates with ACE Leaders worldwide to promote African developers' and business owners' use of Atlassian tools. He actively creates Atlassian content and promotes Atlassian products and ways of working."
      ]
    },
    {
      id: 2,
      name: "Hon Seun Fakuade",
      content: "Commissioner for Innovation, Science & Digital Economy in Ekiti State",
      src: "/cloudImg/2.png",
      alt: "Hon Seun Fakuade",
      bio: [
        "Mr. Fakuade is a dedicated public servant and strategic thinker currently serving as the Commissioner for Innovation, Science & Digital Economy in Ekiti State. He was previously Special Adviser on Governance, Reforms and Innovation to Governor Oyebanji until his appointment as Commissioner. He brings a wealth of experience and expertise in governance, policy development, and project management.",
        "Prior to his current role, he held the position of Senior Special Assistant to Governor Fayemi on Economic Research and Policy Documentation, where he contributed significantly to economic research and documentation for the government.",
        "Mr. Fakuade holds a Master of Public Administration (MPA) degree from the prestigious Lee Kuan Yew School of Public Policy, where he focused on creating economic centers of prosperity through clusters and economic competitiveness. This academic background has informed his approach to policy and governance.",
        "During his tenure with the Government of Ekiti State (EKSG) from 2019 to 2022, Mr. Fakuade served as the Senior Special Assistant on Policy, Research & Documentation to Governor Dr. Kayode Fayemi. In this capacity, he demonstrated his dedication to supporting institutions and governments in achieving their development goals.",
        "With over ten years of experience in public policy, strategic planning, project management, and policy communications, Mr. Fakuade is a recognized development thinker, digital transformation professional, and governance specialist. He played a pivotal role in supervising infrastructure projects and critical economic initiatives of the EKSG, totaling more than N50 billion."
      ]
    },
    {
      id: 3,
      name: "Katarzyna Zofia Pawlak",
      content: "Chief Product Officer & Co-founder @Appsvio | Atlassian Marketplace Partner | 🙌 Jira, Confluence & Jira Service Management enthusiast | 🙌 Atlassian Community Leader",
      src: "/cloudImg/3.png",
      alt: "Katarzyna Zofia Pawlak",
      align: "top",
      bio: [
        "Katarzyna Pawlak is a co-founder of Appsvio, an Atlassian Marketplace Partner specializing in IT Service Management apps. As Chief Product Officer, she shapes a vision for their products published on the Atlassian Marketplace. As an active community member since 2017, she has been recognized as an Atlassian Community Leader. Her proudest achievements are numerous Atlassian Certifications, earning her the title of Atlassian Certified Expert. Additionally, she holds certifications including Professional Scrum Product Owner and ITIL® Foundation Certificate in IT Service Management.",
        "In her spare time, she explores new places through jogging and hiking."
      ]
    },
    {
      id: 4,
      name: "Rodney Nissen",
      content: "Sr. Atlassian Toolsmith | Blogger | Atlassian Certified Expert",
      src: "/cloudImg/4.png",
      alt: "Rodney Nissen",
      bio: []
    },
    {
      id: 5,
      name: "Naj Irshrad",
      content: "Vice President of Federal Sales at ISOS",
      src: "/cloudImg/5.png",
      alt: "Naj Irshrad",
      bio: []
    },
    {
      id: 6,
      name: "Erica Larson",
      content:
        "People/Project/Process Leader, Atlassian Cloud Administrator, Atlassian Community Leader",
      src: "/cloudImg/6.png",
      alt: "Erica Larson",
      bio: [
        "Erica has been a self-proclaimed Atlassian nerd since 2015. As a Process Engineer at Clearwater Analytics, she enjoys helping teams solve problems across the business. Erica has worked in server, data center, and cloud instances primarily focused on the Jira suite and Confluence tools. She has been the Atlassian Community Leader for the Boise, Idaho chapter since 2019"
      ]
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
      bio: [
        "Samuel Kojo Desu Acheampong currently serves as the sales team lead for onpoint Africa where he oversees sales operations for both local and international markets.",
        "With close to a decade's experience coupled with demonstrated results, he leverages on his rich and extensive experience to offer disruptive software solutions to enterprise firms. His dynamic approach to customer acquisition, has given him the chance to be a speaker and a trainer on topics encircling B2B sales and IT service management.",
        "Samuel's entrenched passion for digital transformation ,growth and revenue generation fuels his direction in helping all firms become industry leaders in the ever-evolving landscape of technology and innovation. Toppled with a unique African-rooted flair that harnesses the continent's rich cultural diversity and entrepreneurial spirit.",
        "Samuel leads onpoint's vision to serve and make organizations operate in high velocity Agile, DevOps and ITSM solutions with Atlassian being the value proposition.",
        "Samuel believes in building together as africans, as Ghanaians and challenging ourselves to do it, build the right culture and delivering value. It is in that accord, that Samuel is on a mission with a hyper-focused aim geared towards helping organizations in achieving wholistic digital transformation."
      ]
    },
    {
      id: 10,
      name: "Olaniyan Remilekun",
      content:
        "Olaniyan Remilekun is an Artificial Intelligence Engineer and Data Scientist.",
      src: "/cloudImg/10.png",
      alt: "Olaniyan Remilekun",
      bio: [
        "Olaniyan Remilekun is an Artificial Intelligence Engineer and Data Scientist. He have a strong background in Statistics, Software Development and Python development. He is certified Deep learning expert by IBM, and has participated in so many hackathon and helped some startup building their product.",
        "He is a trainer and lover of Ai."
      ]
    },
  ];

  const closeModal = () => {
    setModalData(null);
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
                      // backgroundPosition: `${
                      //   !!guest?.align ? "center -30px" : "top"
                      // }`,
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                  <div className={styles.specific} onClick={() => guest.bio.length > 0 ? setModalData(guest) : null}>
                    <h3>{guest.name}</h3>
                    <p>{guest.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {(modalData != null) && (
        <Modal
          onClose={closeModal}
          modalData={modalData}
        />
      )}
    </>
  );
};

export default Speaker;
