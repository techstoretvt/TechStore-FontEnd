import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import './VerifyForm.scss'
import { verifyCreateUser } from '../../../services/userService'



const VerifyForm = (props) => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('')
    const [countdown, setCountdown] = useState('')
    const navigate = useNavigate();

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
            if (res && res.errCode !== -1 && res.errCode !== 1) {
                setTitle(res.errMessage);
            }
            else {
                setTitle('Xử lý thất bại!');
            }
            setLoading(false)
            setCountdown(5)
        }
        fetchData()

    }, [])

    async function fetchBusinesses() {
        if (countdown !== '' && countdown > 0) {
            setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)
        }
        else if (countdown === 0) {
            navigate("/");
        }
    }

    useEffect(() => {
        fetchBusinesses()
    })



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
                            <div className='go-home'>
                                Bạn sẽ được chuyển đến
                                <Link to={'/'}>Trang Chủ</Link>
                                sau {countdown} giây
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default VerifyForm