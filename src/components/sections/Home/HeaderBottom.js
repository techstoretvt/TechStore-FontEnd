
import { Link } from 'react-router-dom'
import './HeaderBottom.scss'

import { useDispatch, useSelector } from "react-redux";
import { userLogout } from '../../../store/actions/userAction';


const HeaderBottom = () => {
    const currentUser = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch();

    const handleLogout = () => {
        userLogout(dispatch);
    }

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
                            {
                                (currentUser === '' || currentUser === null) &&
                                <Link to={'/account/login'} className="no-login">
                                    <span></span>
                                    <div className='text'>Đăng nhập</div>
                                </Link>
                            }
                            {
                                currentUser &&

                                <button className="login">
                                    {currentUser?.typeAccount === 'google' &&
                                        <span style={{ backgroundImage: `url(${currentUser.avatarGoogle})` }}></span>
                                    }
                                    {currentUser?.typeAccount === 'facebook' &&
                                        <span style={{ backgroundImage: `url(${currentUser.avatarFacebook})` }}></span>
                                    }
                                    {currentUser?.typeAccount === 'web' && currentUser?.avatar &&
                                        <span style={{ backgroundImage: `url(${currentUser.avatar})` }}></span>
                                    }
                                    {currentUser?.typeAccount === 'web' && !currentUser?.avatar &&
                                        <span style={{ backgroundImage: `url(${currentUser.avatar})` }}></span>
                                    }





                                    <div className='text' title={currentUser?.firstName}>{currentUser?.firstName}</div>

                                    <div className='login-menu'>
                                        <Link className='menu-item' to={'/'}>Tài khoản</Link>
                                        <Link className='menu-item' to={'/'}>Tài khoản</Link>
                                        <Link className='menu-item' to={'/'}>Tài khoản</Link>
                                        <Link className='menu-item' to={'/'}>Tài khoản</Link>
                                        <div className='menu-item' onClick={() => handleLogout()}>Đăng xuất</div>
                                    </div>
                                </button>
                            }

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