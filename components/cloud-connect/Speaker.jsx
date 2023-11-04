import styles from "../../styles/eventpage.module.scss";

const Speaker = () => {
  const guestData = [
    // {
    //   id: 1,
    //   name: "Tala Saleh",
    //   content:
    //     "Atlassian Partner Manager| Southern Europe, Middle East, Turkey and Africa",
    //   src: "/cloudImg/mine1.jpg",
    //   alt: "Tala Saleh",
    // },
    // {
    //   id: 2,
    //   name: "Tyler Venable",
    //   content: "Atlas Bench Head of Operations and Talent Solutions",
    //   src: "/cloudImg/mine2.png",
    //   alt: "Tyler Venable",
    // },
    // {
    //   id: 3,
    //   name: "Mat May",
    //   content: "E7 Solutions, LLC, System Administrator",
    //   src: "/cloudImg/mine3.png",
    //   alt: "Mat May",
    // },
    // {
    //   id: 4,
    //   name: "Ted Henry",
    //   content: "Principal Atlassian Solutions Architect at Forty8Fifty Labs",
    //   src: "/cloudImg/mine4.png",
    //   alt: "Ted Henry",
    // },
    // {
    //   id: 5,
    //   name: "Katakyie Kojo Desu",
    //   content: "Business Development Manager at On Point, Africa",
    //   src: "/cloudImg/mine5.jpg",
    //   alt: "Katakyie Kojo Desu",
    // },
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

  return (
    <>
      <div className={styles.visitorsPage}>
        <h1 className={styles.speakers}>Speakers</h1>
        <div className={styles.guest}>
          {guestData.map((guest) => {
            return (
              <div
                className={styles.specific1}
                key={guest.id}
                style={{ backgroundImage: `url(${guest.src})`, backgroundPosition: `top` }}
              >
                <div className={styles.specific}>
                  <h3>{guest.name}</h3>
                  <p>{guest.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default Speaker;
