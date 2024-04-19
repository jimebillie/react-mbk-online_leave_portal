import Navbar from "../component/Navbar.tsx";
import Content from "../component/Content.tsx";

export default function Howto() {
    return (
        <>
            <Navbar/>
            <Content>
                <h1>
                    <i className="fa-solid fa-book-open-reader"></i> วิธีใช้
                </h1>
                <div style={{
                    backgroundColor: "silver",
                    minHeight: "70vh",
                    border: "2px solid darkgray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "gray",
                    flexDirection: "column"
                }}>
                    <b>
                        ใส่วีดีโอสอนการใช้งาน
                    </b>
                </div>
            </Content>
        </>
    )
}