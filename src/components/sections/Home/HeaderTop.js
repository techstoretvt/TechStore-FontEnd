import { Link } from 'react-router-dom'
import './HeaderTop.scss'

const HeaderTop = () => {
    return (
        <div className='header-top-container'>
            <div className='header-top-content'>
                <div className='left'>
                    Hotline: <b>0987.654.321</b> (8h - 12h, 13h30 - 17h)
                </div>
                <div className='right'>
                    <Link to='/a'>
                        <span></span>
                        Hệ thống cửa hàng
                    </Link>
                    <Link to='/'>Cài đặt</Link>
                    <Link to='/'>Liên hệ</Link>
                </div>
            </div>
        </div >
    )
}

export default HeaderTop