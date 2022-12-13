import { Link } from 'react-router-dom';
import './NewPost.scss'

const NewPost = () => {
    return (
        <div className='NewPost-container'>
            <div className='NewPost-content'>
                <div className='NewPost-main'>
                    <div className='top'>
                        <div className='title'>
                            Bài Viết Mới Nhất
                        </div>
                        <Link to={'/'} className='more'>
                            Xem Thêm
                        </Link>
                    </div>
                    <div className='content'>
                        <div className='content-left'>
                            <Link to={'/'} className='image'>
                                <div></div>
                            </Link>
                            <Link to={'/'} className='name' title='Điểm qua các loại tivi có mặt trên thị trường hiện nay'>
                                Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                Điểm qua các loại tivi có mặt trên thị trường hiện nay
                            </Link>
                            <div className='time'>
                                11 Tháng 11, 2022
                            </div>
                        </div>
                        <div className='content-right'>
                            <div className='content-right-wrap'>
                                <Link to={'/'} className='image'>
                                    <div></div>
                                </Link>
                                <div className='content'>
                                    <Link to={'/'} className='name' title=' Điểm qua các loại tivi có mặt trên thị trường hiện nay'>
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                    </Link>
                                    <div className='time'>
                                        11 Tháng 11, 2022
                                    </div>
                                </div>
                            </div>
                            <div className='content-right-wrap'>
                                <Link to={'/'} className='image'>
                                    <div></div>
                                </Link>
                                <div className='content'>
                                    <Link to={'/'} className='name' title=' Điểm qua các loại tivi có mặt trên thị trường hiện nay'>
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                    </Link>
                                    <div className='time'>
                                        11 Tháng 11, 2022
                                    </div>
                                </div>
                            </div>
                            <div className='content-right-wrap'>
                                <Link to={'/'} className='image'>
                                    <div></div>
                                </Link>
                                <div className='content'>
                                    <Link to={'/'} className='name' title=' Điểm qua các loại tivi có mặt trên thị trường hiện nay'>
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                    </Link>
                                    <div className='time'>
                                        11 Tháng 11, 2022
                                    </div>
                                </div>
                            </div>
                            <div className='content-right-wrap'>
                                <Link to={'/'} className='image'>
                                    <div></div>
                                </Link>
                                <div className='content'>
                                    <Link to={'/'} className='name' title=' Điểm qua các loại tivi có mặt trên thị trường hiện nay'>
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                        Điểm qua các loại tivi có mặt trên thị trường hiện nay
                                    </Link>
                                    <div className='time'>
                                        11 Tháng 11, 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/'} className='NewPost-img light-effect light-effect-flash'>
                    <div></div>
                </Link>
            </div>
        </div>
    )
}
export default NewPost;