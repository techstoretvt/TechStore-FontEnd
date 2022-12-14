import { Link } from 'react-router-dom';
import './HeaderLogin.scss'

const HeaderLogin = () => {
    return (
        <div className='HeaderLogin-container'>
            <div className='HeaderLogin-content'>
                <Link to={'/'} className='HeaderLogin-logo'>

                </Link>
            </div>
        </div>
    )
}

export default HeaderLogin;