import Image from "next/image";
import Logo from "../assets/images/client_logo.png"
import styles from "../../styles/Nav.module.css";

const Nav = () => {
    return(
        <div className = {styles.container}>
            <div className= {styles.nav}>
                <div className={styles.item}>Current Menu</div>
                <div className={styles.item}>Grab & Go</div>
            </div>
            <div className= {styles.logo}>
                <Image 
                    src = {Logo}
                    alt = ""
                    layout="fill"
                    placeholder="blur"
                />
            </div>
            <div className= {styles.nav}>
                <div className={`${styles.item} ${styles.button}`}>Shop</div>
                <div className={styles.item}>Blog</div>
                <div className={styles.item}>Card</div>
                <div className={styles.item}>Sign up</div>
                <div className={styles.item}>Login</div>
            </div>
        </div>
    )
}
export default Nav;
