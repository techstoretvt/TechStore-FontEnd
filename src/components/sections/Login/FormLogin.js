import { Link, useNavigate } from 'react-router-dom';
import './FormLogin.scss'
import { useEffect, useState } from 'react';
import validator from 'email-validator'
import classNames from 'classnames';
import { UserLogin } from '../../../services/userService'
import { updateTokensSuccess, updateTokensFaild } from '../../../store/actions/userAction'
import { useDispatch } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';

const FormLogin = (props) => {
    //variable
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errMessEmail, setErrMessEmail] = useState('')
    const [errMessPass, setErrMessPass] = useState('')
    const [errMess, setErrMess] = useState('');
    const [isOpenLoading, setIsOpenLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

    }, [])


    const handleSubmitLogin = async () => {
        console.log('submit login');

        var check = checkValueInput();
        if (check) {
            setIsOpenLoading(!isOpenLoading);
            let res = await UserLogin({
                email,
                pass
            })

            if (res && res.errCode === 0) {
                updateTokensSuccess(res.data, dispatch);
                navigate('/')
            }
            else if (res && res.errCode === 2) {
                updateTokensFaild(dispatch)
                setErrMess(res.errMessage)
            }
            else {
                updateTokensFaild(dispatch)
                setErrMess('Đã có lỗi xảy ra, vui lòng thử lại sau!')
            }
            setIsOpenLoading(false)
        }
        else {
            setIsOpenLoading(false)
        }

    }

    const checkValueInput = () => {
        let check = true;
        if (email === '') {
            setErrMessEmail('Vui lòng nhập email của bạn!');
            check = false;
        }
        else if (!validator.validate(email)) {
            setErrMessEmail('Email không hợp lệ!');
            check = false;
        }
        else {
            setErrMessEmail('')
        }
        if (pass === '') {
            setErrMessPass('Vui lòng nhập mật khẩu!');
            check = false;
        }
        else if (pass.length < 6) {
            setErrMessPass('Tối thiểu 6 ký tự!');
            check = false;
        }
        else {
            setErrMessPass('')
        }

        return check;
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            event.target.blur();
            handleSubmitLogin();
        }
    }

    return (
        <div className='FormLogin-container'>
            <div className='FormLogin-content'>
                <LoadingOverlay
                    active={isOpenLoading}
                    spinner
                    text='Đang xử lý...'
                >
                    <div className="container">
                        <div className="login-box">
                            <h2>Đăng nhập</h2>
                            <div className='login-box-mess'>
                                {errMess}
                            </div>
                            <form>
                                <div className='redirect-to-register'>
                                    <a href={'/account/register'}>Đăng ký</a>
                                </div>
                                <div className={classNames("user-box", { errValid: !!errMessEmail })}>
                                    <input onKeyDown={(event) => handleEnter(event)} value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="" required />
                                    <label>Email</label>
                                    <span>{errMessEmail}</span>


                                </div>
                                <div className={classNames("user-box", { errValid: !!errMessPass })}>
                                    <input onKeyDown={(event) => handleEnter(event)} value={pass} onChange={(event) => setPass(event.target.value)} type="password" name="" required />
                                    <label>Mật khẩu</label>
                                    <span>{errMessPass}</span>
                                </div>
                                <div className='forgot-pass'>
                                    Quên mật khẩu
                                </div>

                                <Link onClick={() => handleSubmitLogin()}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Đăng nhập
                                </Link>


                                <div className='or'>
                                    <div></div>
                                    <div>HOẶC</div>
                                    <div></div>
                                </div>

                                <div className='google'>


                                </div>

                            </form>
                        </div>

                        <div className="blob"></div>
                    </div>
                </LoadingOverlay>



            </div>
        </div>
    )
}
export default FormLogin;