import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from "react-toastify";
import './AddTypeProduct.scss'
import classNames from 'classnames';
import Swal from 'sweetalert2';

import {
    AddTypeProductService, getAllTypeProduct, deleteTypeProduct,
    updateTypeProduct
} from '../../../services/adminService'

const AddTypeProduct = (props) => {

    const [nameType, setNameType] = useState('');
    const [inputErr, setInputErr] = useState(false);
    const [ListTypeProduct, setListTypeProduct] = useState([])

    let isStartAddType = useRef(false);

    let getTypeProduct = async () => {
        let res = await getAllTypeProduct();
        if (res && res.errCode === 0) {
            setListTypeProduct(res.data);
        }
        else {
            toast.error(res.errMessage);
        }

    }

    useEffect(() => {
        getTypeProduct()
    }, [])

    const handleAddTypeProduct = async () => {
        if (!nameType) {
            toast.warning("Vui lòng nhập tên loại sản phẩm!");
            setInputErr(true);
        }
        else {
            setInputErr(false);
            //logic
            if (!isStartAddType.current) {
                isStartAddType.current = true;
                console.log('them');

                //add
                let res = await AddTypeProductService({
                    nameTypeProduct: nameType
                });

                if (res && res.errCode === 0) {
                    toast.success("Thêm loại sản phẩm thành công!");
                    setNameType('');
                    isStartAddType.current = false;
                    getTypeProduct();
                }
                else {
                    toast.error(res.errMessage);
                    isStartAddType.current = false;
                }


            }
        }
    }

    const handleRemoveTypeProduct = (idType) => {
        Swal.fire({
            title: 'Bạn có chắc?',
            text: "Điều này có thể sẽ phải xóa các sản phẩm và các thương hiệu có liên quan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK, Xóa!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                //logic
                let res = await deleteTypeProduct({
                    idType
                })

                if (res && res.errCode === 0) {
                    Swal.fire(
                        'Đã xóa!',
                        'Bạn đã xóa loại sản phẩm này.',
                        'success'
                    )
                    getTypeProduct()
                }
                else if (res && res.errCode !== 0) {
                    Swal.fire(
                        'Thất bại!',
                        `${res.errMessage}.`,
                        'error'
                    )
                }



            }
        })
    }

    const handleChangeTypeProduct = (item) => {
        Swal.fire({
            title: 'Tên loại sản phẩn mới',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Thay đổi',
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
                let res = await updateTypeProduct({
                    id: item.id,
                    nameTypeProduct: login
                })

                if (res && res.errCode === 0) {
                    Swal.fire(
                        'Thành công!',
                        'Đã thay đổi tên loại sản phẩm.',
                        'success'
                    )
                    getTypeProduct()
                }
                else if (res && res.errCode !== 0) {
                    Swal.fire(
                        'Thất bại!',
                        `${res.errMessage}`,
                        'error'
                    )
                }
            }
        })

    }

    return (
        <div>
            <Modal
                size='lg'
                isOpen={props.isModal}
                // toggle={props.toggle}
                className={''}
                centered={true}
            >
                <ModalHeader toggle={props.toggle}>Thêm loại sản phẩm</ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-6 form-group wrap-input'>
                            <label >Tên loại sản phẩm</label>
                            <input
                                className={classNames("form-control", { err: inputErr })}
                                value={nameType}
                                onChange={(e) => setNameType(e.target.value)}
                                style={{ fontSize: '16px' }}
                            />
                            <button className='btn btn-primary mt-2'
                                onClick={handleAddTypeProduct}
                            >Thêm</button>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Id loại</th>
                                    <th>Tên loại sản phẩm</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListTypeProduct && ListTypeProduct.length > 0 &&
                                    ListTypeProduct.map(item => (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.nameTypeProduct}</td>
                                            <td>
                                                <button className='btn btn-warning '
                                                    onClick={() => handleChangeTypeProduct(item)}
                                                >Sửa</button>
                                                <button className='btn btn-danger mx-2'
                                                    onClick={() => handleRemoveTypeProduct(item.id)}
                                                >Xóa</button>
                                            </td>
                                        </tr>
                                    ))
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
    );

}

export default AddTypeProduct;