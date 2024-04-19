import styles from "../style/component/Navbar.module.css"
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className={styles.wrapNav}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <img src="/logo/Mattel-brand.svg.png" alt=""/>
                    </div>
                    <div className={styles.right}>
                        <ul>
                            <li>
                                <Link to={"/"}>
                                    <i className="fa-solid fa-house-chimney"></i> หน้าแรก
                                </Link>
                            </li>
                            <li>
                                <Link to={"/howto"}>
                                    <i className="fa-solid fa-book-open-reader"></i> วิธีใช้
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>
                                    <i className="fa-solid fa-address-card"></i> ติดต่อเรา
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}