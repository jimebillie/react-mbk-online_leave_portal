
import Navbar from "../component/Navbar.tsx";
import Content from "../component/Content.tsx";

function Home() {
    return (
        <>
            <Navbar/>
            <Content>
                <h1>
                    <i className="fa-solid fa-bullhorn"></i> ประกาศ
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
                        รูปภาพประกาศ
                    </b>
                    <small>
                        (ขนาดใดก็ได้)
                    </small>
                </div>
            </Content>

        </>
    )
}

export default Home
