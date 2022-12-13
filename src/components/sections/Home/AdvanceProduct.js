import './AdvanceProduct.scss'
import ListProduct from './ListProduct'

const AdvanceProduct = () => {
    return (
        <div className='AdvanceProduct-container'>
            <div className='AdvanceProduct-content'>
                <div className='AdvanceProduct-top'>
                    Sản phẩm cao cấp
                </div>
                <div className='AdvanceProduct-bottom'>
                    <div className='AdvanceProduct-category'>
                        <div className='category active'>
                            Android Tivi
                        </div>
                        <div className='category'>
                            Loa - Âm thanh
                        </div>
                        <div className='category'>
                            Tủ lạnh
                        </div>
                        <div className='category'>
                            Máy giặc
                        </div>
                    </div>
                    <div className='AdvanceProduct-list'>
                        <ListProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdvanceProduct;