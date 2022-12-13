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
import AdvanceProduct from "../../components/sections/Home/AdvanceProduct";
import GenuineFlycam from "../../components/sections/Home/GenuineFlycam";
import NewPost from "../../components/sections/Home/NewPost";
import TopSearch from "../../components/sections/Home/TopSearch";
import FooterHome from "../../components/sections/Home/FooterHome";

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
            <AdvanceProduct />
            <GenuineFlycam />
            <NewPost />
            <TopSearch />
            <FooterHome />
        </div>
    )
}

export default HomePage;