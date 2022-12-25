import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddTypeProduct from './AddTypeProduct'
import './ProductManagement.scss'


const ProductManagement = () => {
    const [isOpenAddTypeProduct, setIsOpenAddTypeProduct] = useState(true)

    useEffect(() => {
        document.title = 'Admin - TechStoreTvT'
    }, [])

    const toggleAddTypeProduct = () => {
        setIsOpenAddTypeProduct(!isOpenAddTypeProduct);
    }


    return (
        <>
            <div className='ProductManagement-container'>
                <div className='ProductManagement-content'>
                    <Link onClick={toggleAddTypeProduct}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Thêm loại sản phẩm
                    </Link>
                    <Link to={'/admin'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Thêm thương hiệu
                    </Link>
                    <Link to={'/admin'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Thêm sản phẩm
                    </Link>
                    <Link to={'/admin'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Thêm khuyễn mãi
                    </Link>


                </div>

            </div>
            {
                <AddTypeProduct
                    isModal={isOpenAddTypeProduct}
                    toggle={toggleAddTypeProduct}
                />
            }
        </>
    )
}

export default ProductManagement