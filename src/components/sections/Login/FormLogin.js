import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import './FormLogin.scss'
import LoginGoogle from './LoginWithGoogle';

const FormLogin = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className='FormLogin-container'>
            <div className='FormLogin-content'>
                <div className="container">
                    <div className="login-box">
                        <h2>Đăng nhập</h2>
                        <div className='login-box-mess'>
                            {/* Tài khoản hoặc mật khẩu không chính xác */}
                        </div>
                        <form>
                            <div className="user-box">
                                <input type="text" name="" required />
                                <label>Email</label>
                                {/* <span>Không đúng định dạng</span> */}
                            </div>
                            <div className="user-box">
                                <input type="password" name="" required />
                                <label>Mật khẩu</label>
                                {/* <span>Không đúng định dạng</span> */}
                            </div>
                            <div className='forgot-pass'>
                                Quên mật khẩu
                            </div>
                            <Link>
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
                                <GoogleLogin
                                    clientId="723996790296-trjgkh2f49595ll1ucbb035o9ts1a5gs.apps.googleusercontent.com"
                                    buttonText="Đăng nhập với google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />

                            </div>
                            {/* <LoginGoogle /> */}

                        </form>
                    </div>

                    <div className="blob"></div>
                </div>
            </div>
        </div>
    )
}
export default FormLogin;