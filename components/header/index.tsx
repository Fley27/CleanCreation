import Nav from "../header/nav"
import BottomHeader from "./wrapper"
import styles from "../../styles/Header.module.css"

const Header = () => {
    return(
        <div className={styles.container}>
            <Nav/>
            <BottomHeader/>
        </div>
    )
}

export default Header;