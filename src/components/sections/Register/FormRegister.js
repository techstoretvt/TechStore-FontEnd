import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import validator from 'email-validator'
import { useDispatch } from "react-redux";
import ReactLoading from 'react-loading';
import ReCAPTCHA from "react-google-recaptcha";


import './FormRegister.scss'
import { updateTokensSuccess, updateTokensFaild } from '../../../store/actions/userAction'
import { CreateUser } from '../../../services/userService'


var io = require('socket.io-client');
var socket


const sitekey_capcha = '6LddcqYjAAAAAIjN3PHGSUazDdVW16IQ2Gj9SaWF'


const FormRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenModal, setIsOpenModel] = useState(false);
    const [isCapcha, setIsCapcha] = useState(null);

    const [errMess, setErrMess] = useState('');
    const [isEmptyInput, setIsEmptyInput] = useState([false, false, false, false, false])

    //websocket
    useEffect(() => {
        socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`, { reconnect: true });

        // Add a connect listener
        socket.on('connect', function (socket) {
            console.log('Connected!');
        });
        socket.on('disconnect', function (socket) {
            console.log('Disconnected!');
        });
        // socket.emit('CH01', 'me', 'test msg');

        return () => {
            socket.off('connect');
            socket.off('pong');
        }
    }, [])

    const handleSubmit = async () => {
        setIsLoading(true)

        let copyArr = [false, false, false, false, false];
        let errmess = ''

        if (!lastName || !firstName || !email || !password || !rePassword) {
            errmess = 'Vui lòng không bỏ trống thông tin!'

            if (!lastName) {
                copyArr[0] = true;
            }

            if (!firstName) {
                copyArr[1] = true;
            }

            if (!email) {
                copyArr[2] = true;
            }

            if (!password) {
                copyArr[3] = true;
            }

            if (!rePassword) {
                copyArr[4] = true;
            }

            setErrMess(errmess)
            setIsEmptyInput(copyArr)

            setIsLoading(false);
        }
        else {
            if (!validator.validate(email)) {
                errmess = 'Email không hợp lệ!'
                copyArr[2] = true;
            }
            else if (password.length < 6) {
                errmess = 'Mật khẩu quá ngắn, tối thiểu 6 ký tự!'
                copyArr[3] = true;
            }
            else if (password !== rePassword) {
                errmess = 'Mật khẩu không trưng khớp!'
                copyArr[3] = true;
                copyArr[4] = true;

            }
            else if (!isCapcha) {
                errmess = 'Vui lòng xác thực bạn không phải người máy!'
                setIsCapcha(false)
            }

            else {
                // Call api
                const data = {
                    lastName,
                    firstName,
                    email,
                    pass: password
                }

                let res = await CreateUser(data);
                if (res && res.errCode === 0) {
                    updateTokensSuccess(res.data, dispatch);

                    socket.on(`email-verify-${res.data.keyVerify}`, function (data) {
                        console.log('emit success');
                        navigate('/')
                    })
                    setIsOpenModel(true)

                }

                else if (res && res.errCode === 2) {
                    updateTokensFaild(dispatch)
                    errmess = 'Tài khoản đã tồn tại!'
                }

                else {
                    //Các trường hợp còn lại
                    updateTokensFaild(dispatch)
                    errmess = 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
                }
            }
            setErrMess(errmess)
            setIsEmptyInput(copyArr)
            setIsLoading(false);
        }
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    }

    function onChangeCapcha(value) {
        console.log("Captcha value:", value);
        setIsCapcha(true)
    }

    return (
        <div className='FormRegister-container'>
            <div className='FormRegister-content'>
                <div className="container">
                    {isOpenModal === false ?
                        <div className='FormRegister-form'>
                            <div className='title'>
                                Đăng ký
                            </div>
                            <div className='errMessage'>
                                {errMess}
                            </div>
                            {/* err */}
                            <div className={classNames('wrap-input', { err: isEmptyInput[0] })}>
                                <input onKeyDown={(event) => handleEnter(event)} id='lastname' onChange={(event) => setLastName(event.target.value)} value={lastName} type='text' required />
                                <label htmlFor='lastname'>Họ</label>
                            </div>
                            <div className={classNames('wrap-input', { err: isEmptyInput[1] })}>
                                <input onKeyDown={(event) => handleEnter(event)} id='firstname' onChange={(event) => setFirstName(event.target.value)} value={firstName} type='text' required />
                                <label htmlFor='firstname'>Tên</label>
                            </div>
                            <div className={classNames('wrap-input', { err: isEmptyInput[2] })}>
                                <input onKeyDown={(event) => handleEnter(event)} id='email' onChange={(event) => setEmail(event.target.value)} value={email} type='text' required />
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div className={classNames('wrap-input', { err: isEmptyInput[3] })}>
                                <input onKeyDown={(event) => handleEnter(event)} id='password' onChange={(event) => setPassword(event.target.value)} value={password} type='password' required />
                                <label htmlFor='password'>Mật khẩu</label>
                            </div>
                            <div className={classNames('wrap-input', { err: isEmptyInput[4] })}>
                                <input onKeyDown={(event) => handleEnter(event)} id='repassword' onChange={(event) => setRePassword(event.target.value)} value={rePassword} type='password' required />
                                <label htmlFor='repassword'>Nhập lại mật khẩu</label>
                            </div>
                            <div className={classNames('recapcha', { active: isCapcha === false })}>
                                <ReCAPTCHA
                                    sitekey={sitekey_capcha}
                                    onChange={onChangeCapcha}
                                    theme='dark'
                                    // hl='tr'
                                    size='normal'
                                    onError={(e) => { setIsCapcha(false) }}
                                    onExpired={(ex) => { setIsCapcha(false) }}
                                />
                            </div>
                            {isLoading === false ?
                                <div className='btn-submit' onClick={async () => {
                                    handleSubmit();
                                }}>
                                    Đăng ký
                                    <div className='bg-btn'></div>
                                </div> :
                                <div className='btn-submit'>
                                    <ReactLoading type={'spinningBubbles'} color={'#fff'} height={'30px'} width={'30px'} />
                                    <div className='bg-btn'></div>
                                </div>
                            }



                            <div className='forward-login'>
                                Bạn đã có tài khoản?
                                <Link to={'/account/login'}>Đăng nhập</Link>
                            </div>
                            <a id='forward' hidden={true} href={`${process.env.REACT_APP_BACKEND_URL}/account`}>.</a>
                        </div> :
                        <div className='FormRegister-form modal'>
                            <div className='modal-wrap'>
                                <div className='modal-title'>
                                    Thông báo
                                </div>
                                <div className='modal-content'>
                                    <div className='content1'>
                                        Cảm ơn bạn đã đăng ký tài khoản trên
                                        <b style={{ color: "#2380ce" }}> TechStoreTvT </b>
                                        với địa chỉ email:
                                        <b> {email || 'example@gmail.com'}</b>.
                                        Một email kích hoạt tài khoản được gửi đến
                                        <b> {email || 'example@gmail.com'}</b>.
                                        Vui lòng vào hộp thư để xem email kích hoạt tài khoản.
                                    </div>

                                    <div className='content2'>
                                        <b>Chú ý: Đôi khi email nằm trong thư mục spam,... Vui lòng vào spam để kiểm tra có email kích hoạt không?</b>
                                    </div>
                                    <div className='content3'>
                                        Cảm ơn.
                                        <br />
                                        Đội ngũ TechStoreTvt

                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                    <div className="blob"></div>
                </div>

            </div>
        </div >
    )
}
export default FormRegister;