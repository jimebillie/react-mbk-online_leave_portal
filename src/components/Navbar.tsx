import styles from "../style/component/Navbar.module.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    


    return (
        <>
            <div className={styles.wrapNav}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Link to={"/"}>
                            <img src="/logo/Mattel-brand.svg.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}