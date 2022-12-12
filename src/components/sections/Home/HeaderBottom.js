
import { Link } from 'react-router-dom'
import './HeaderBottom.scss'

const HeaderBottom = () => {
    return (
        <div className='header-bottom-container'>
            <div className='header-bottom-content'>
                <div className='header-logo'>
                    <Link to={'/'} className='header-logo-img'>

                    </Link>
                </div>
                <div className='header-search'>
                    <div className='header-search-wrap'>
                        <div className='search-input'>
                            <input type='text' placeholder='Tìm kiếm sản phẩm...' />
                            <div className='btn-search'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='search-boder'></div>
                        </div>
                        <div className='search-suggestions'>

                        </div>
                    </div>
                </div>
                <div className='header-icon'>
                    <div className='header-icon-wrap'>
                        <div className='icon-cart'>
                            <div className='left'>
                                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                                <span></span>
                                <div>0</div>
                            </div>

                            <div className='right'>
                                Giỏ hàng
                            </div>
                        </div>
                        <div className='header-icon-separate'></div>
                        <div className='icon-account'>
                            <span></span>
                            <div>Đăng nhập</div>
                        </div>
                        <div className='icon-menu'>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HeaderBottom