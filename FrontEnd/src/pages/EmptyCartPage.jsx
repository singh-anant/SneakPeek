import { Link } from 'react-router-dom'
import EmptyImage from '../../assets/EmptyCartImage.png'

const EmptyCartPage = () => {
  return (
    <div className='empty-cart-container'>
        <div className="image-container">
            <img src={EmptyImage} alt="" />
        </div>
        <div className="text">
            <p>Look like you haven't bought any sneaker 👟👟</p>
        </div>
        <div className="backButton">
            <li><Link style={{textDecoration:'none',color:'black'}} to='/'><button>Back to Home</button></Link></li>
        </div>
    </div>
  )
}

export default EmptyCartPage
