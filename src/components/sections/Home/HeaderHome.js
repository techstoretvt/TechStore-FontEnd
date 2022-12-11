import { useEffect } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

import './HeaderHome.scss'

const HeaderHome = (props) => {

    useEffect(() => {

    }, [])
    return (
        <div className="header-home">
            {props.isTop && <HeaderTop />}
            <HeaderBottom />
        </div>
    )
}
export default HeaderHome