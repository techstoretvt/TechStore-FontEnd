import { useEffect } from "react";
import HeaderLogin from "../../components/sections/Login/HeaderLogin";
import FormRegister from "../../components/sections/Register/FormRegister";

const RegisterPage = () => {
    useEffect(() => {
        document.title = 'Đăng ký - TechStoreTvT'
    }, [])
    return (
        <div className="RegisterPage-container">
            <div className='RegisterPage-content'>
                <HeaderLogin />
                <FormRegister />
            </div>
        </div>
    )
}

export default RegisterPage;