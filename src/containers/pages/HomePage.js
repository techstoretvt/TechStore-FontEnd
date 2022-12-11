import { useEffect } from "react";
import ExhibitionImage from "../../components/sections/Home/Exhibition-image";
import HeaderHome from "../../components/sections/Home/HeaderHome";
import SliderImageHome from "../../components/sections/Home/SliderImageHome";

const HomePage = () => {

    useEffect(() => {
        document.title = 'Tech Store'
    }, [])

    return (
        <div className="homePage-container">
            <HeaderHome isTop={true} />
            <SliderImageHome />
            <ExhibitionImage />
        </div>
    )
}

export default HomePage;