import React from 'react'
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';

const ProductInCart = ({name,details,price,image,id,quantity,setQuantity}) => {
      const {removeSneaker} =useCartStore();
  const {subtractAmount,addAmount}=useAmountStore();

//basically if my quanity reaches 0 or less remove it from cart.
  if(quantity<=0)
  removeSneaker(id);
  
  
  


  return (<div className="card_item">
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
            <span className="pqt-minus" onClick={()=>{
                setQuantity(quantity-1)
                subtractAmount(price)
            }}>-</span>
            <span className="pqt">{quantity}</span>
            <span className="pqt-plus" onClick={()=>{
                setQuantity(quantity+1)
                addAmount(price)
            }}>+</span>
          </div>
        </div>
      </div>
  )
}

export default ProductInCart

