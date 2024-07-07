import Navbar from "../components/Navbar.tsx";
import Content from "../components/Content.tsx";
import Marquee from "react-fast-marquee";
import Style from "../style/page/Home.module.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />
            <Content>
                <div className="">
                    <div className="w-100">
                        <Marquee className="text-red-800 text-4xl py-3 font-semibold">
                            กดเลือกเมนูที่ต้องการใช้งาน
                        </Marquee>
                    </div>
                    <div className="mt-5">
                        <ul className="flex justify-center flex-col items-center">
                            <Link to={"/home/menu/1"}>
                                <li className={Style.btn}><i className="fa-solid fa-file-invoice"></i> 1. วิธีการใช้ Leave Online ขออนุมัติการลา</li>
                            </Link>
                            <Link to={"/home/menu/2"}>
                                <li className={Style.btn}><i className="fa-solid fa-address-book"></i> 2. ขั้นตอนการอนุมัติการลาของพนักงาน</li>
                            </Link>
                            <Link to={"/home/menu/3"}>
                                <li className={Style.btn}><i className="fa-solid fa-arrow-down-up-across-line"></i> 3. ขั้นตอนการเรียกดูบัน ทึกเวลาเข้า-ออกงาน</li>
                            </Link>
                            <Link to={"/home/menu/4"}>
                                <li className={Style.btn}><i className="fa-solid fa-list-check"></i> 4. ขั้นตอนการตรวจสอบสิทธิการลาทุกประเภท</li>
                            </Link>
                            <Link to={"/home/menu/5"}>
                                <li className={Style.btn}><i className="fa-solid fa-clock-rotate-left"></i> 5. ขั้นตอนการตรวจสอบการทำงานล่วงเวลา (OT)</li>
                            </Link>
                            <Link to={"/home/menu/6"}>
                                <li className={Style.btn}><i className="fa-solid fa-calendar-days"></i> 6. ขั้นตอนการตรวจสอบวันลาที่รออนุมัติ</li>
                            </Link>
                            <Link to={"/home/menu/7"}>
                                <li className={Style.btn}><i className="fa-solid fa-user-tie"></i> 7. ขั้นตอนการอนุมัติการลาของหัวหน้างาน</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </Content>

        </>
    )
}

export default Home
