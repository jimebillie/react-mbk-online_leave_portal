import styles from "../style/component/Navbar.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState<any | null>(null);


    return (
        <>
            <div className={styles.wrapNav}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Link to={"/"}>
                            <img src="/logo/Mattel-brand.svg.png" alt=""/>
                        </Link>
                    </div>
                    <div className={styles.bergerBar}
                         onClick={() => toggleNav === null ? setToggleNav({display: "flex"}) : setToggleNav(null)}>
                        {
                            toggleNav === null ? "เมนู" : "ปิดเมนู"
                        }
                    </div>
                    <div className={styles.right} style={toggleNav} >
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