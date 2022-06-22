import styles from "../../styles/Card.module.css";

const Card = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.title} dangerouslySetInnerHTML = {{ __html: props.title }} />
            <div className={styles.description}>{props.description}</div>
            <button className={styles.btn}>{props.btnValue}</button>
        </div>
    )
}

export default Card;