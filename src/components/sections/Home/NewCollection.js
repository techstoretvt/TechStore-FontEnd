import { Link } from 'react-router-dom'
import ListProduct from './ListProduct'
import './NewCollection.scss'

const NewCollection = () => {
    return (
        <div className='NewCollection-container'>
            <div className='NewCollection-content'>
                <div className='NewCollection-top'>
                    Bộ sưu tập mới
                </div>
                <div className='NewCollection-bottom'>
                    <div className='left'>
                        <div className='left-img'>

                        </div>
                    </div>
                    <div className='right'>
                        <div className='category'>
                            <div className='category-item active'>
                                Điện thoại
                            </div>
                            <div className='category-item'>
                                Máy tính bảng
                            </div>
                            <div className='category-item'>
                                Smart Tivi
                            </div>
                            <div className='category-item'>
                                Phụ kiện
                            </div>
                        </div>
                        <div className='list-product'>
                            <ListProduct />
                        </div>
                    </div>
                </div>
                <div className='NewCollection-btn'>
                    <div className='wrap-btn'>
                        <Link to={'/'} className='btn'>
                            <span>Xem tất cả Điện Thoại</span>
                        </Link>
                        <div className='bg-btn'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewCollection