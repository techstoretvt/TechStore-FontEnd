import { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

import './HeaderHome.scss'

const HeaderHome = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const [IsShowHeader, setIsShowHeader] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            var vitri = window.scrollY

            if (vitri < 450) {
                setIsShowHeader(false);
            }
            else {
                if (vitri > scrollY) {
                    setIsShowHeader(false);
                }
                else {
                    setIsShowHeader(true);
                }
            }
            setScrollY(vitri)
        })
    }, [scrollY])


    return (
        <div className="header-home">
            {props.isTop && <HeaderTop />}
            <HeaderBottom />
            <div className={IsShowHeader === true ? 'header-home-scroll active' : 'header-home-scroll'}>
                <HeaderBottom />
            </div>
        </div>
    )
}
export default HeaderHome