import React from 'react'
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';

const ProductInCart = ({name,details,price,image,id}) => {
      const {removeSneaker} =useCartStore();
  const {subtractAmount}=useAmountStore();


  return (
    <div className="card_item">
        <div className="product_img">
          <img src={image} alt="" />
        </div>
        <div className="product_info">
          <h1>{name}</h1>
          <p>{details}</p>
          <div className="close-btn">
            <button onClick={()=>{
                removeSneaker(id)
                subtractAmount(price)
            }}>✗</button>
          </div>
          <div className="product_rate_info">
            <h1>$ {price}</h1>
            <span className="pqt-minus">-</span>
            <span className="pqt">1</span>
            <span className="pqt-plus">+</span>
          </div>
        </div>
      </div>
  )
}

export default ProductInCart

