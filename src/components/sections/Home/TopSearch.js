import { Link } from 'react-router-dom';
import './TopSearch.scss'

const TopSearch = () => {
    return (
        <div className='TopSearch-container'>
            <div className='TopSearch-content'>
                <div className='TopSearch-left'>
                    <div className='wrap'>
                        <div className='title'>
                            Xu hướng tìm kiếm
                        </div>
                        <Link to={'/'} className='btn'>
                            <div className='btn-name'>
                                Xem Thêm
                            </div>
                            <div className='btn-bg'>

                            </div>
                        </Link>
                    </div>
                </div>
                <div className='TopSearch-right'>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>
                    <Link to={'/'} className='TopSearch-item'>
                        <div className='image'>

                        </div>
                        <div className='title'>
                            Điện thoại
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}
export default TopSearch;