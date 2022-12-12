import { Link } from 'react-router-dom';
import './CardProduct.scss'

const CardProduct = () => {
    return (
        <div className='CardProduct-container'>
            <Link to={'/'} className='CardProduct-content'>
                <div className='CardProduct-imgs'>
                    <div className='imgs-wrap'>
                        <div className='img img-1'></div>
                        <div className='img img-2'></div>
                    </div>
                </div>
                <div className='CardProduct-bottom'>
                    <div className='trademark'>
                        Apple
                    </div>
                    <div className='name' title='Đồng hồ thông minh smartwatch DZ09'>
                        Đồng hồ thông minh smartwatch DZ09
                        Đồng hồ thông minh smartwatch DZ09
                    </div>
                    <div className='price-promotion'>
                        980,000₫
                    </div>
                    <div className='price'>
                        <div className='price-number'>
                            1,123,000₫
                        </div>
                        <div className='price-number-promotion'>
                            -13%
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProduct;