import Image from "next/image";
import Card from "../cards";
import Wrapper from "../assets/images/wrapper.jpeg"
import styles from "../../styles/Bottom-Header.module.css";

const BottomHeader = () => {
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src = {Wrapper}
                    alt = ""
                    layout="fill"
                    placeholder="blur"
                    objectFit="cover"
                />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.card}>
                <Card
                    title = "<span>Get Started <br/> With a Healthier You</span>"
                    description = "We make eating healthy convenient and delicious so you can have more time to do the things you love."
                    btnValue = "GET STARTED"
                />
            </div>
        </div>
    )
}

export default BottomHeader;