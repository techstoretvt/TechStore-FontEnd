import './ListProduct.scss'
import CardProduct from './CardProduct'

const ListProduct = () => {
    return (
        <div className='ListProduct-container'>
            <div className='ListProduct-content'>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
                <div className='ListProduct-item'>
                    <CardProduct />
                </div>
            </div>
        </div>
    )
}
export default ListProduct