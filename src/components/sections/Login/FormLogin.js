import { Link, useNavigate } from 'react-router-dom';
import './FormLogin.scss'
import { useEffect, useState } from 'react';
import validator from 'email-validator'
import classNames from 'classnames';
import { UserLogin, loginGoogle, loginFacebook, loginGithub } from '../../../services/userService'
import { updateTokensSuccess, updateTokensFaild } from '../../../store/actions/userAction'
import { useDispatch } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';
// import jwt_decode from "jwt-decode";

import { LoginSocialFacebook, LoginSocialGithub, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';


const client_id_gg = '1051226548375-224relhu5ls2roroco5d16ccsrc0ssn6.apps.googleusercontent.com'
const appid_face = '1131387264234227'
const client_id_git = '09a0f9c783583c608447'
const client_secret_git = '03c0485c0bb0a5094f7891f5ced2962d31776b0d'
const redirect_uri_git = 'http://localhost:3000/account/login'

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


    //google
    async function handleLoginGoogleSuccess(response) {
        setIsOpenLoading(true)
        const data = {
            firstName: response.data.given_name,
            lastName: response.data.family_name,
            email: response.data.email,
            avatar: response.data.picture,
            idGoogle: response.data.sub,
        }
        let res = await loginGoogle(data);

        if (res && res.errCode === 0) {
            updateTokensSuccess(res.data, dispatch);
            navigate('/')
        }
        else if (res && res.errCode !== 0) {
            setErrMess(res?.errMessage)
            setIsOpenLoading(false)
        }

    }


    useEffect(() => {

    }, [])


    const handleSubmitLogin = async () => {

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

    const handleLoginFacebookCuccess = async (response) => {
        const data = {
            firstName: response.data.last_name,
            lastName: response.data.short_name,
            idFacebook: response.data.userID,
            avatarFacebook: response.data.picture.data.url,
        }
        let res = await loginFacebook(data);
        if (res && res.errCode === 0) {
            updateTokensSuccess(res.data, dispatch);
            navigate('/')
        }
        if (res && res.errCode !== 0) {
            setErrMess(res.errMessage)
            setIsOpenLoading(false)
        }
    }

    const handleLoginGithubCuccess = async (response) => {
        console.log('response: ', response);

        const data = {
            firstName: response.data.login,
            avatarGithub: response.data.avatar_url,
            idGithub: response.data.id,
        }
        console.log('data: ', data);

        // return;
        let res = await loginGithub(data);
        if (res && res.errCode === 0) {
            updateTokensSuccess(res.data, dispatch);
            navigate('/')
        }
        if (res && res.errCode !== 0) {
            setErrMess(res.errMessage)
            setIsOpenLoading(false)
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
                                    <input onKeyDown={(event) => { setErrMessEmail(''); handleEnter(event) }} value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="" required />
                                    <label>Email</label>
                                    <span>{errMessEmail}</span>


                                </div>
                                <div className={classNames("user-box", { errValid: !!errMessPass })}>
                                    <input onKeyDown={(event) => { setErrMessPass(''); handleEnter(event) }} value={pass} onChange={(event) => setPass(event.target.value)} type="password" name="password" required
                                        autoComplete='false'
                                    />
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

                                <div className='wrap-btn-social'>
                                    <div className='google' id='google'>
                                        <LoginSocialGoogle
                                            className='google-btn'
                                            client_id={client_id_gg}
                                            onResolve={(response) => {
                                                handleLoginGoogleSuccess(response)
                                            }}
                                            onReject={err => {
                                                console.log(err);
                                                setIsOpenLoading(false)
                                            }}
                                        >
                                            <GoogleLoginButton />
                                        </LoginSocialGoogle>
                                    </div>
                                    <div className='facebook'>
                                        <LoginSocialFacebook
                                            appId={appid_face}
                                            className="facebook-btn"
                                            onLoginStart={() => {
                                                setIsOpenLoading(true)
                                            }}
                                            onResolve={(response) => {
                                                handleLoginFacebookCuccess(response)
                                            }}
                                            onReject={(error) => {
                                                console.log(error);
                                            }}
                                        >
                                            <FacebookLoginButton />
                                        </LoginSocialFacebook>
                                    </div>
                                    <div className='github'>
                                        <LoginSocialGithub
                                            client_id={client_id_git}
                                            client_secret={client_secret_git}
                                            redirect_uri={redirect_uri_git}
                                            className='github-btn'
                                            onLoginStart={() => {
                                                setIsOpenLoading(true)
                                            }}
                                            onResolve={(response) => {
                                                handleLoginGithubCuccess(response)
                                            }}
                                            onReject={(err) => {
                                                console.log("err", err);
                                            }}
                                        >
                                            <GithubLoginButton />
                                        </LoginSocialGithub>
                                    </div>
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