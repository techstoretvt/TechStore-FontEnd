import { useEffect, useRef, useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { getLogin } from '../../../store/actions/userAction'

import './HeaderHome.scss'
import { useDispatch, useSelector } from "react-redux";

const HeaderHome = (props) => {
    const [IsShowHeader, setIsShowHeader] = useState(false)

    let preScrollY = useRef(window.scrollY);

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.user.accessToken)
    const refreshToken = useSelector(state => state.user.refreshToken)

    //effect scoll header
    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        var vitri = window.scrollY

        if (vitri < 450) {
            setIsShowHeader(false);
        }
        else {
            if (vitri >= preScrollY.current) {
                setIsShowHeader(false);
            }
            else {
                setIsShowHeader(true);
            }
        }
        preScrollY.current = vitri
    }

    //get user login
    useEffect(() => {
        if (accessToken !== null && refreshToken !== null)
            getLogin({ accessToken, refreshToken }, dispatch);
    }, [accessToken, refreshToken, dispatch])

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