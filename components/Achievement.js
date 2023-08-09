import styles from '../styles/achievement.module.scss';

const AchievementCounter = ({value, name}) => {
    return (
        <div className={styles.counter}>
            <h3>{value}</h3>
            <p>{name}</p>
        </div>
    )
}


export {AchievementCounter};