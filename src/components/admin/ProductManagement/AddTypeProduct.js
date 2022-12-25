import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddTypeProduct.scss'

const AddTypeProduct = (props) => {

    return (
        <div>
            <Modal
                size='lg'
                isOpen={props.isModal}
                toggle={props.toggle}
                className={''}
                centered={true}
            >
                <ModalHeader toggle={props.toggle}>Thêm loại sản phẩm</ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-6 form-group'>
                            <label >Tên loại sản phẩm</label>
                            <input className='form-control' />
                            <button className='btn btn-primary'>Thêm</button>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <table id="customers">
                            <tr>
                                <th>Id sản phẩm</th>
                                <th>Tên loại sản phâm</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>
                                    <button className='btn btn-warning '>Sửa</button>
                                    <button className='btn btn-danger mx-2'>Xóa</button>
                                </td>
                            </tr>

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