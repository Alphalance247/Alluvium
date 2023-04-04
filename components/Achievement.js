import styles from '../styles/achievement.module.scss'

const achievements = [
    { value: "30+", name: "Happy Clients" },
    { value: "15+", name: "Migration Experts" },
    { value: "4.5", name: "Customer Rating" },
    { value: "500+", name: "Projects" },
    { value: "20+", name: "Countries" },
    { value: "100%", name: "success rate" }
] 

const AchievementCounter = ({value, name}) => {
    return (
        <div className={styles.counter}>
            <h3>{value}</h3>
            <p>{name}</p>
        </div>
    )
}


export {AchievementCounter, achievements};