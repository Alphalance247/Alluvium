import styles from "../../styles/corevalues.module.scss";
import Image from "next/image";

const values = [
  {
    description:
      "Leadership is about driving innovation and continuously improving our services and products. We believe in staying ahead of the curve and exploring new ways to enhance our offerings and deliver greater value to our clients.",
    title: "Leadership",
    image: "Leadership.svg",
    backgroundImage: "/assets/icons/Leadership-bg.svg",
  },
  {
    description:
      "Excellence is about delivering top-quality results and exceeding our clients’ expectations. We are committed to delivering the best possible outcomes and consistently exceeding our clients’ goals and objectives. ",
    title: "Excellence",
    image: "Excellence.svg",
    backgroundImage: "/assets/icons/Excellence-bg.svg",
  },
  {
    description:
      "Ownership is about taking personal responsibility for our work and delivering results. Our team is encouraged to bring their unique skills and perspectives to each project, and we strive to create a culture of collaboration and mutual support.",
    title: "Ownership",
    image: "Ownership.svg",
    backgroundImage: "/assets/icons/Ownership-bg.svg",
  },
];

const CoreValue = ({ title, image, bg, description }) => {
  return (
    <div className={styles.value} style={{ backgroundImage: bg }}>
      <div className="position-relative">
        <Image
          src={"/assets/icons/" + image}
          width={48}
          height={48}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>{description} </p>
    </div>
  );
};

export { CoreValue, values };
