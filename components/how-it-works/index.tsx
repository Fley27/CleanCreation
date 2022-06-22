import Card from "./card";
import Menu from "..//assets/images/menu.svg";
import Truck from "..//assets/images/truck.svg"
import Cook from "..//assets/images/cook.svg"
import styles from "../../styles/how-it-works/How-It-Work.module.css";

const HowItWork = () => {
    return(
        <div className={styles.container}>
            <div className = {styles.title}>How It Works</div>
            <div className={styles.cards}>
                <Card
                    title = "PLACE ORDER"
                    image = {Menu}
                    description = "Select from our wide variety of signature dishes, custom, or specialty meal options. Pick up in Baton Rouge or choose between in-store pickup or delivery in the New Orleans Metro Area"
                />
                <Card
                    title = "COOK"
                    image = {Cook}
                    description = "Our staff will carefully prepare, cook, and package all of your meals and have them fresh and ready to go!"
                />
                <Card
                    title = "PICKUP / DELIVER"
                    image = {Truck}
                    description = "You choose whether to pick up your meals in our very own brick and mortar location or even choose a delivery method in case you are busy. We never want you to miss out"
                />
            </div>
        </div>
    )
}

export default HowItWork;