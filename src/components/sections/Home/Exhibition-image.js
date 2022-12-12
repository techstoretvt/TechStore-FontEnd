import { Link } from 'react-router-dom'
import './Exhibition-image.scss'


const ExhibitionImage = () => {
    return (
        <div className='ExhibitionImage-container'>
            <div className='ExhibitionImage-content'>
                <Link to={'/'} className='ExhibitionImage-item img-1 background-primary'>
                    <div></div>
                </Link>
                <Link to={'/'} className='ExhibitionImage-item img-2 background-primary'>
                    <div></div>
                </Link>
                <Link to={'/'} className='ExhibitionImage-item img-3 background-primary'>
                    <div></div>
                </Link>
                <Link to={'/'} className='ExhibitionImage-item img-4 background-primary'>
                    <div></div>
                </Link>
            </div>
        </div>
    )
}

export default ExhibitionImage