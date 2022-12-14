import { useEffect } from "react";
import FormLogin from "../../components/sections/Login/FormLogin";
import HeaderLogin from "../../components/sections/Login/HeaderLogin";


const LoginPage = () => {

    useEffect(() => {
        document.title = 'Đăng nhập - TechStoreTvt'
    }, [])

    return (
        <div className="LoginPage-container">
            <div className='LoginPage-content'>
                <HeaderLogin />
                <FormLogin />
            </div>
        </div>
    )
}

export default LoginPage;