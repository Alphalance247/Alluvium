import styles from '../../styles/corevalues.module.scss'
import Image from 'next/image'

const values = [
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ", title: "Leadership" , image : "Leadership.svg", backgroundImage: "/assets/icons/Leadership-bg.svg"},
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ", title: "Integrity", image : "Integrity.svg", backgroundImage: "/assets/icons/Integrity-bg.svg" },
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ", title: "Excellence" , image : "Excellence.svg", backgroundImage: "/assets/icons/Excellence-bg.svg"},
    { description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient ", title: "Ownership" , image : "Ownership.svg", backgroundImage: "/assets/icons/Ownership-bg.svg"},
] 

const CoreValue = ({title,image,bg, description}) => {
    return (
        <div className={styles.value} style={{backgroundImage:bg}}>
            <div className="position-relative">
                <Image src={'/assets/icons/'+image} width={48} height={48} />
            </div>
            <h3>{title}</h3>
            <p>{description} </p>
        </div>
    )
}

export {CoreValue, values};