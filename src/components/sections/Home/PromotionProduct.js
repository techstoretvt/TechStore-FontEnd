import './PromotionProduct.scss'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import SliderProduct from './SliderProduct';

const PromotionProduct = () => {

    return (
        <div className='PromotionProduct-container'>
            <div className='PromotionProduct-content'>
                <div className='PromotionProduct-top'>
                    <div className='dot'>

                    </div>
                    <div className='title'>
                        SẢN PHẨM KHUYẾN MÃI
                    </div>
                    <div className='countdown'>
                        <Countdown date={Date.now() + (10000 * 100000)} />
                    </div>
                </div>
                <div className='PromotionProduct-center'>
                    <div className='pc'>
                        <SliderProduct slidesToShow={5} />
                    </div>
                    <div className='tablet'>
                        <SliderProduct slidesToShow={4} />
                    </div>
                    <div className='mobile'>
                        <SliderProduct slidesToShow={2} />
                    </div>

                </div>
                <div className='PromotionProduct-bottom'>
                    <Link to={'/'} className='btn'>
                        <span>Xem tất cả SẢN PHẨM KHUYẾN MÃI</span>
                        <i className="fa-regular fa-circle-right"></i>
                        <div></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PromotionProduct