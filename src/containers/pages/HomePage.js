import { useEffect } from "react";
import HeaderTop from "../../components/sections/Home/HeaderTop";
import HeaderBottom from "../../components/sections/Home/HeaderBottom";

const HomePage = () => {

    useEffect(() => {
        document.title = 'Tech Store'
    }, [])

    return (
        <div className="homePage-container">
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}

export default HomePage;