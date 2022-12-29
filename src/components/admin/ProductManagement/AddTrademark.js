import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

import './AddTrademark.scss'
import { getTypeProductGQL } from '../../../services/graphql'
import { AddTrademarkService, getTrademarkService } from '../../../services/adminService'
import { useEffect, useState } from 'react';

const AddTrademark = (props) => {

    const [listTypeProduct, setListTypeProduct] = useState([]);
    const [idTypeProduct, setIdTypeProduct] = useState('');
    const [nameTrademark, setNameTrademark] = useState('');
    const [listTrademark, setListTrademark] = useState([]);

    const getTrademark = async () => {
        let res = await getTrademarkService();
        if (res && res.errCode === 0) {
            setListTrademark(res.data)
        }
        else {
            toast.error('Có lỗi xảy ra phía Server!')
        }
    }

    useEffect(() => {
        const getTypeProduct = async () => {
            let resTypeProduct = await getTypeProductGQL()
            setListTypeProduct(resTypeProduct.data.typeproducts)
        }
        getTypeProduct();
        getTrademark();
    }, [])

    const handleChangeSelect = (event) => {
        setIdTypeProduct(event.target.value)
    }

    const handleAddTrademark = async () => {
        if (!nameTrademark || !idTypeProduct) {
            toast.warning('Vui lòng nhập tên và loại sản phẩm!')
        }
        else {
            let data = {
                nameTrademark,
                idTypeProduct
            }
            let res = await AddTrademarkService(data);

            if (res && res.errCode === 0) {
                Swal.fire(
                    'Thành công!',
                    'Thêm thương hiệu thành công.',
                    'success'
                )
                getTrademark();
                setIdTypeProduct('')
                setNameTrademark('')
            }
            else {
                toast.error(res.errMessage);
            }
        }
    }

    return (
        <div className='AddTrademark-container'>
            <Modal
                size='lg'
                isOpen={props.isModal}
                className={''}
                centered={true}
            >
                <ModalHeader toggle={props.toggle}>Thêm thương hiệu</ModalHeader>
                <ModalBody>
                    <div className='top'>
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <label>Tên thương hiệu</label>
                                <input value={nameTrademark}
                                    className='form-control'
                                    onChange={(event) => setNameTrademark(event.target.value)}
                                />
                            </div>
                            <div className='col-6 form-group'>
                                <label>Loại sản phẩm</label>
                                <select value={idTypeProduct}
                                    className='form-control'
                                    onChange={(event) => handleChangeSelect(event)}
                                >
                                    <option value='' selected disabled hidden>--Loại sản phẩm--</option>
                                    {
                                        listTypeProduct && listTypeProduct.length > 0 &&
                                        listTypeProduct.map(item => {
                                            return (
                                                <option
                                                    key={item.id} value={item.id}
                                                >
                                                    {item.nameTypeProduct}
                                                </option>
                                            )
                                        })
                                    }


                                </select>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary' onClick={handleAddTrademark}>Thêm</button>
                                {/* <button className='btn btn-warning'>Lưu thay đổi</button> */}
                                {/* <button className='btn btn-danger mx-3'>Hủy</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='bottom mt-3'>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Id thương hiệu</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Loại sản phẩm</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listTrademark && listTrademark.length > 0 &&
                                    listTrademark.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.nameTrademark}</td>
                                                <td>{item.typeProduct.nameTypeProduct}</td>
                                                <td>
                                                    <button className='btn btn-warning '

                                                    >Sửa</button>
                                                    <button className='btn btn-danger mx-2'

                                                    >Xóa</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggle}>Thoát</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default AddTrademark