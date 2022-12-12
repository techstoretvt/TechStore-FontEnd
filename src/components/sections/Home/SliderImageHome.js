import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderImageHome.scss'
import slide1 from '../../../assets/image/home/slider-image-slide-1.webp'
import slide2 from '../../../assets/image/home/slider-image-slide-2.png'
import slide3 from '../../../assets/image/home/slider-image-slide-3.png'
import slide4 from '../../../assets/image/home/slider-image-slide-4.webp'
import slide5 from '../../../assets/image/home/slider-image-slide-5.webp'
import slide6 from '../../../assets/image/home/slider-image-slide-6.webp'
import { Link } from "react-router-dom";

const SliderImageHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='slider-image-container'>
            <div className='slider-image-content'>
                <Link to={'/'} className='background-primary slider-image-left light-effect light-effect-flash'>

                </Link>
                <div className='slider-image-right'>
                    <div className='top'>
                        <div className='item'>
                            <div className='item-img img-1'></div>
                            <div className='item-text'>
                                Đảm bảo chất lượng
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-img img-2'></div>
                            <div className='item-text'>
                                Miễn phí vận chuyển
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-img img-3'></div>
                            <div className='item-text'>
                                Mở hộp kiểm tra nhận hàng
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='bottom-left background-primary'>
                            <Slider {...settings}>
                                <Link to={'/'} className="slider-item">
                                    <img alt="" src={slide1} />
                                </Link>
                                <Link to={'/'} className="slider-item">
                                    <img alt="" src={slide2} />
                                </Link>
                                <Link to={'/'} className="slider-item">
                                    <img alt="" src={slide3} />
                                </Link>
                            </Slider>
                        </div>
                        <div className='bottom-right'>
                            <div className='pc'>
                                <Link to={'/'} className='pc-img img-1 light-effect light-effect-slow background-primary'>

                                </Link >
                                <Link to={'/'} className='pc-img img-2 light-effect light-effect-slow background-primary'>

                                </Link >
                                <Link to={'/'} className='pc-img img-3 light-effect light-effect-slow background-primary'>

                                </Link >
                            </div>
                            <div className='tablet background-primary'>
                                <Slider>
                                    <Link to={'/'} className="slider-item">
                                        <img alt="" src={slide4} />
                                    </Link>
                                    <Link to={'/'} className="slider-item">
                                        <img alt="" src={slide5} />
                                    </Link>
                                    <Link to={'/'} className="slider-item">
                                        <img alt="" src={slide6} />
                                    </Link>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderImageHome