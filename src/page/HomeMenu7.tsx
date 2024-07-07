import { Link } from "react-router-dom";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function HomeMenu7() {
    return (
        <>
            <Navbar />
            <Content>
                <div className="underline flex sticky top-[20px]">
                    <Link className="bg-red-900 text-white p-3 rounded-md" to="/"><i className="fa-solid fa-circle-left"></i> ย้อนกลับ
                    </Link>
                </div>
                <hr className="my-3" />
                <div>
                    <img className="w-[100%] mb-3" src="/home/menu7/1.png" />
                    <img className="w-[100%] mb-3" src="/home/menu7/2.png" />
                </div>
            </Content>
        </>
    )
}