
import './AdminPage.scss'
import HeaderLogin from '../../components/sections/Login/HeaderLogin'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';

const AdminPage = () => {

    useEffect(() => {
        document.title = 'Admin - TechStoreTvT'
    }, [])

    return (
        <>
            <div className='admin-container'>
                <div className='admin-content'>
                    <div className='admin-header'>
                        <HeaderLogin />
                    </div>
                    <div className='admin-menu-list'>
                        <Link to={'/admin/product'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Quản Lý Sản Phẩm
                        </Link>
                        <Link to={'/admin'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Quản Lý Đơn Hàng
                        </Link>
                        <Link to={'/admin'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Quản Lý Người Dùng
                        </Link>
                        <Link to={'/admin'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Quản Lý Bài Viết
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminPage
