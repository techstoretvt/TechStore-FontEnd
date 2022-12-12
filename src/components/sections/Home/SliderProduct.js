import Slider from 'react-slick'
import CardProduct from './CardProduct';
import './SliderProduct.scss'


const SliderProduct = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        lazyLoad: 'ondemand',
        slidesToShow: props.slidesToShow,
        slidesToScroll: 1
    };
    return (
        <div className='SliderProduct-container' >
            <div className='SliderProduct-content'>
                <Slider {...settings}>
                    <div>
                        <CardProduct />
                    </div>
                    <div>
                        <CardProduct />
                    </div>
                    <div>
                        <CardProduct />
                    </div>
                    <div>
                        <CardProduct />
                    </div>
                    <div>
                        <CardProduct />
                    </div>
                    <div>
                        <CardProduct />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderProduct