import React from 'react'
import ProductInCart from '../components/ProductInCart'
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';
import EmptyCartPage from './EmptyCartPage';


const CartPage = () => {
    const {amount}=useAmountStore();
    const cart = useCartStore((state) => state.cart)
    
  return (
   ( amount===0 )?(<EmptyCartPage/>):
   ( <div className="cartpage-container">
  <div className="payment_details">
    
    <div className="details_card">
      <h1>Shipping Information</h1>
      <div className="name_address">
        <div className="first_lastName">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="address">
          <input type="text" placeholder="Address" />
          <input type="number" placeholder="Pincode" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
      
      <div className="proced_payment">
        <button >Checkout</button>
      </div>
    </div>
  </div>
  <div className="order_summary">
    <div className="summary_card">
          <h1>Order Summary</h1>
        {cart.map((sneaker,index)=>{
        return <ProductInCart key={index} 
          name={sneaker?.name}
          details={sneaker?.details}
          image={sneaker?.grid_picture_url}
          id={sneaker?.id}

          price={Math.floor(sneaker?.retail_price_cents/100)}
          />
        })}
      <hr/>
      <div className="order_total">
        <p>Total Amount</p>
        <h4>${amount}</h4>
      </div>
    </div>
  </div>
</div>)
  )
}

export default CartPage
