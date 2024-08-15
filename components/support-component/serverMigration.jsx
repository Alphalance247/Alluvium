import AtlassianSubHead from "components/atlassian-service-reuse/atlassianSubhead";
import styles from "../../styles/atlassian-services-style/supports.module.scss";

const ServerMigration = () => {
  const data = [
    {
      id: "1",
      heading: "24/7",
      title: "Technical Support",
    },
    {
      id: "2",
      heading: "99.9%",
      title: "Response Time",
    },
  ];
  return (
    <section className={`container-fluid ${styles.support__style}`}>
      <div className={`container- ${styles.cloud__support}`}>
        <AtlassianSubHead
          headings="Atlassian Server to Cloud Migration"
          strategy="Lorem ipsum dolor sit amet consectetur. Dui neque vel nisl pretium egestas felis eget. Eget aliquet dolor congue netus fermentum elit risus neque. Fermentum ornare amet diam egestas nunc mauris et. Platea sed enim ipsum feugiat. Rhoncus aliquam mollis nunc nec amet enim sed ultrices iaculis. In varius mattis viverra id morbi non diam. Arcu elit eu viverra ac dignissim lectus mi. Nec posuere in facilisi tincidunt orci enim tortor volutpat. Lobortis lacus urna lectus vulputate ut."
        />

        <div className={styles.response}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <h2>{el.heading}</h2>
                <p>{el.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServerMigration;
