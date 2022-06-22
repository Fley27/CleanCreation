import Image from "next/image";
import styles from "../../styles/how-it-works/Card.module.css";

const Card = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={props.image}
                    alt =""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}

export default Card;