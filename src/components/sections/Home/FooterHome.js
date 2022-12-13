import { Link } from 'react-router-dom';
import './FooterHome.scss'

const FooterHome = () => {
    return (
        <div className='FooterHome-containet'>
            <div className='FooterHome-content'>
                <div className='FooterHome-top'>

                </div>
                <div className='FooterHome-center'>
                    <div className='item about'>
                        <div className='title'>
                            Về TechStoreTvt
                        </div>
                        <div className='text'>
                            Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì bạn cần để xây dựng thương hiệu online, thành công trong bán lẻ và marketing đột phá.
                        </div>
                        <div className='icons'>
                            <div className='icon'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='icon'>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className='icon'>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className='icon'>
                                <i className="fa-brands fa-google-plus-g"></i>
                            </div>
                            <div className='icon'>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div className='item contact'>
                        <div className='title'>
                            Thông tin liên hệ
                        </div>
                        <div className='address'>
                            <i className="fa-solid fa-location-dot"></i>
                            Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
                        </div>
                        <div className='phongnumber'>
                            <i className="fa-solid fa-phone"></i>
                            1900.000.XXX
                        </div>
                        <div className='email'>
                            <i className="fa-solid fa-envelope"></i>
                            hi@techgo.abc
                        </div>
                    </div>
                    <div className='item support'>
                        <div className='title'>
                            Hỗ trợ khách hàng
                        </div>
                        <ul>
                            <li><Link to={'/'}>Tìm kiếm</Link></li>
                            <li><Link to={'/'}>Giới thiệu</Link></li>
                            <li><Link to={'/'}>Chính sách đổi trả</Link></li>
                            <li><Link to={'/'}>Chính sách bảo mật</Link></li>
                            <li><Link to={'/'}>Điều khoản dịch vụ</Link></li>
                            <li><Link to={'/'}>Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div className='item link'>
                        <div className='title'>
                            Liên kết
                        </div>
                        <ul>
                            <li><Link to={'/'}>Sản phẩm khuyến mãi</Link></li>
                            <li><Link to={'/'}>Sản phẩm nổi bật</Link></li>
                            <li><Link to={'/'}>Tất cả sản phẩm</Link></li>
                        </ul>
                    </div>
                    <div className='item link'>
                        <div className='title'>
                            Chính sách
                        </div>
                        <ul>
                            <li><Link to={'/'}>Chính sách đổi trả</Link></li>
                            <li><Link to={'/'}>Chính sách bán hàng</Link></li>
                            <li><Link to={'/'}>Chính sách giao hàng</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='FooterHome-bottom'>
                    Copyright © 2022 TechStoreTvt. <Link to={'/'}>Powered by ThoaiTran</Link>
                </div>
            </div>
        </div>
    )
}
export default FooterHome;