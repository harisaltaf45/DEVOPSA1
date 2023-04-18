
import "../styles/Home.css"
import Profile from "../assets/profile.jpg"
import "../styles/utility.css"
export default function Home() {
    return (
        <>
            <div className="" >
                <img src={Profile} className="" alt=""
                    style={{ boxShadow: "5px 5px 10px 2px rgba(0,0,0,.8);" }} />
                <div className="col-6" style={{ marginLeft: "20px;" }}>
                    <h1>Haris Altaf</h1>
                    <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sed eaque aspernatur impedit eum natus dicta reprehenderit. Sequi iste perferendis, explicabo ea nesciunt voluptatem obcaecati veritatis voluptatibus. Nihil, et fuga?</p>

                    {/* <a className="resume" href="./assets/resume.pdf" download>Download CV</a> */}

                </div>

            </div>
            <h1>What I Do</h1>
            <div className="row justify-content-center align-items-center g-2">
                <div className="col-12 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/web_development.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>Web Development</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/app_development.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>App Development</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/DataBase.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>DataBase Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/DataBase.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>DataBase Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
