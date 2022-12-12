import './TopSellingProduct.scss'
import SliderProduct from './SliderProduct'

const TopSellingProduct = () => {
    return (
        <div className='TopSellingProduct-container'>
            <div className='TopSellingProduct-content'>
                <div className='TopSellingProduct-top'>
                    TOP SẢN PHẨM BÁN CHẠY
                </div>
                <div className='TopSellingProduct-bottom'>
                    <div className='pc'>
                        <SliderProduct slidesToShow={5} />
                    </div>
                    <div className='tablet'>
                        <SliderProduct slidesToShow={3} />
                    </div>
                    <div className='mobile'>
                        <SliderProduct slidesToShow={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopSellingProduct