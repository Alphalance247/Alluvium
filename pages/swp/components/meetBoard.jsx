import styles from "../../../styles/AlluviumRedesign2025/swp/swp.module.scss";

const MeetBoard = () => {
  return (
    <section className={styles.meet_board}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet the Alluvium Team</h2>

        <div className={styles.team_grid}>
          {/* Team Member 1 */}
          <div className={styles.team_member}>
            <img
              src="/assets/SWP/jaytee.png"
              alt="Team Member 1"
              className={styles.member_image}
            />
            <h3 className={styles.member_name}>Alex Johnson</h3>
          </div>
          {/* Team Member 2 */}
          <div className={styles.team_member}>
            <img
              src="/assets/SWP/wale.png"
              alt="Team Member 2"
              className={styles.member_image}
            />
            <h3 className={styles.member_name}>Sarah Williams</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetBoard;
