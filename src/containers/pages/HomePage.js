import { useEffect } from "react";
import ExhibitionImage from "../../components/sections/Home/Exhibition-image";
import HeaderHome from "../../components/sections/Home/HeaderHome";
import SliderImageHome from "../../components/sections/Home/SliderImageHome";
import PromotionProduct from "../../components/sections/Home/PromotionProduct";
import Category from "../../components/sections/Home/Category";
import TopSellingProduct from "../../components/sections/Home/TopSellingProduct";
import ExhibitionImage2 from "../../components/sections/Home/Exhibition-image-2";
import NewCollection from "../../components/sections/Home/NewCollection";
import ExhibitionImage3 from "../../components/sections/Home/Exhibition-image-3";

const HomePage = () => {

    useEffect(() => {
        document.title = 'Tech Store'
    }, [])

    return (
        <div className="homePage-container">
            <HeaderHome isTop={true} />
            <SliderImageHome />
            <ExhibitionImage />
            <PromotionProduct />
            <Category />
            <TopSellingProduct />
            <ExhibitionImage2 />
            <NewCollection />
            <ExhibitionImage3 />

            <div style={{ height: "500px" }}></div>
        </div>
    )
}

export default HomePage;