import react from "react";
import Header from "../components/Header";
import { Home } from "../components/Home";

const index = () => {
    return(
        <div className="container">
            <div className="leftContainer">
                <Header />
            </div>
            <div className="rightContainer">
                <Home />
            </div>
        </div>
    )
}

export default index