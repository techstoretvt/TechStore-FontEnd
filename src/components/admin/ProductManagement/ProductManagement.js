import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddTypeProduct from './AddTypeProduct'
import AddTrademark from './AddTrademark'
import './ProductManagement.scss'


const ProductManagement = () => {
    const [isOpenAddTypeProduct, setIsOpenAddTypeProduct] = useState(false)
    const [isOpenAddTrademark, setIsOpenAddTrademark] = useState(true)

    useEffect(() => {
        document.title = 'Product - TechStoreTvT'
    }, [])

    const toggleAddTypeProduct = () => {
        setIsOpenAddTypeProduct(!isOpenAddTypeProduct);
    }

    const toggleAddTrademark = () => {
        setIsOpenAddTrademark(!isOpenAddTrademark)
    }


    return (
        <>
            <div className='ProductManagement-container'>
                <div className='header-ProductManagement'>
                    <Link to={'/admin'} className='left'>
                        <i className="fa-solid fa-circle-left"></i>
                    </Link>
                    <div className='right'>
                        Quản lý sản phẩm
                    </div>
                </div>

                <div className='ProductManagement-content'>
                    <Link onClick={toggleAddTypeProduct}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Thêm loại sản phẩm
                    </Link>
                    <Link onClick={toggleAddTrademark}>
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

            <AddTypeProduct
                isModal={isOpenAddTypeProduct}
                toggle={toggleAddTypeProduct}
            />
            <AddTrademark
                isModal={isOpenAddTrademark}
                toggle={toggleAddTrademark}
            />

        </>
    )
}

export default ProductManagement