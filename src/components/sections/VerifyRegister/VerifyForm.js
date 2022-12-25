import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import './VerifyForm.scss'
import { verifyCreateUser } from '../../../services/userService'

var io = require('socket.io-client');
var socket

const VerifyForm = (props) => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('')

    //websocket
    useEffect(() => {
        socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`, { reconnect: true });

        // Add a connect listener
        socket.on('connect', function (socket) {
            console.log('Connected!');
        });
    })

    useEffect(() => {
        document.title = 'Xác nhận đăng ký - TechStoreTvT'

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const valueVerify = {
            id: urlParams.get('id'),
            keyVerify: urlParams.get('keyVerify')
        }

        //call api
        const fetchData = async () => {
            let res = await verifyCreateUser(valueVerify);
            console.log('check res:', res);
            if (res && res.errCode === 2) {
                setTitle(res.errMessage);
            }
            else if (res && res.errCode === 0) {
                setTitle(res.errMessage);

                socket.emit('send-email-verify', `${res.keyVerify}`, 'test msg');
            }
            else {
                setTitle('Xử lý thất bại!');
            }
            setLoading(false)
        }
        fetchData()

    }, [])

    return (
        <div className="VerifyForm-container">
            <div className='VerifyForm-content'>
                {loading ?
                    <div className='loading'>
                        <ReactLoading type={'bubbles'} color={'red'} height={80} width={80} />
                    </div> :
                    <>
                        <div className='top'>
                            Thank you
                        </div>
                        <div className='bottom'>
                            <div className='message'>
                                {title}
                            </div>
                            {/* <div className='go-home'>
                                Bạn sẽ được chuyển đến
                                <Link to={'/'}>Trang Chủ</Link>
                                sau 5 giây
                            </div> */}
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default VerifyForm