import React, { useState } from 'react'
import ProductInCart from '../components/ProductInCart'
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';
import EmptyCartPage from './EmptyCartPage';
import GooglePayButton from '@google-pay/button-react'


const CartPage = () => {
    const {amount}=useAmountStore();
    const cart = useCartStore((state) => state.cart)
    const [quantity,setQuantity]=useState(1);

    
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
        <GooglePayButton
        buttonColor='white'
        buttonType='checkout'
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: amount,
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
      </div>
    </div>
  </div>
  <div className="order_summary">
    <div className="summary_card">
          <h1>Order Summary</h1>
        {cart.map((sneaker,index)=>{
          // const existingItem = cart.find(item => item.id === sneaker.id);
          // if(existingItem){
          //       setQuantity(quantity+1);
          //       return null;
          // }
      return <ProductInCart key={index} 
          name={sneaker?.name}
          details={sneaker?.details}
          image={sneaker?.grid_picture_url}
          id={sneaker?.id}
          price={Math.floor(sneaker?.retail_price_cents/100)}
          setQuantity={setQuantity}
          quantity={quantity}
          
          />}
        )}
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
