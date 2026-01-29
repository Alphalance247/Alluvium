import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/swp/swp.module.scss";

const MeetBoard = () => {
  return (
    <section className={styles.meet_board} id="alluvium-team">
      <div className={styles.container__meet_board}>
        <div></div>
        <div>
          <h2 className={styles.title}>Meet the Alluvium Team</h2>

          <div className={styles.team_grid}>
            {/* Team Member 1 */}
            <div className={styles.team_member}>
              <Image
                src="/assets/SWP/jaytee.png"
                alt="Team Member 1"
                width={345}
                height={315}
                className={styles.member_image}
              />
              <h3 className={styles.member_name}>Taiwo Ojo</h3>
              <p className={styles.member_role}>Lead Migration Specialist</p>
            </div>
            {/* Team Member 2 */}
            <div className={styles.team_member}>
              <Image
                src="/assets/SWP/wale.png"
                width={345}
                height={315}
                alt="Team Member 2"
                className={styles.member_image}
              />
              <h3 className={styles.member_name}>Wale Olojo</h3>
              <p className={styles.member_role}>Migration Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeetBoard;
