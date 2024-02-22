import React, { useRef, useState } from 'react'
import ProductInCart from '../components/ProductInCart'
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';
import EmptyCartPage from './EmptyCartPage';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


const CartPage = () => {
    const {amount}=useAmountStore();
    const cart = useCartStore((state) => state.cart)
    const [quantity,setQuantity]=useState(1);
    
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [address,setAddress]=useState();
    const [pincode,setPincode]=useState();
    const [country,setCountry]=useState();

    const handleGenerateBill = () => {
    // Define document definition
    const documentDefinition = {
        content: [
            { text: 'Bill Details', style: 'header' },
            { text: 'Shipping Information', style: 'subheader' },
            `First Name: ${firstName}`,
            `Last Name: ${lastName}`,
            `Address: ${address}`,
            `Pincode: ${pincode}`,
            `Country: ${country}`,
            { text: 'Purchased Items', style: 'subheader' },
            {
                ul: cart.map(item => `${item.name}: $${item.retail_price_cents/100}`)
            },
            { text: `Total Amount: $${amount}`, style: 'total' }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                margin: [0, 0, 0, 20]
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 15, 0, 5]
            },
            total: {
                fontSize: 16,
                bold: true,
                margin: [0, 15, 0, 0]
            }
        }
    };

    // Create PDF
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('bill.pdf'); // Downloads the PDF with the name 'bill.pdf'
};


    
  return (
   ( amount===0 )?(<EmptyCartPage/>):
   ( <div className="cartpage-container">
  <div className="payment_details">
    
    <div className="details_card">
      <h1>Shipping Information</h1>
      <div className="name_address">
        <div className="first_lastName">
          <input onChange={(z)=>{setFirstName(z.target.value)}} type="text" placeholder="First Name" />
          <input onChange={(z)=>{setLastName(z.target.value)}} type="text" placeholder="Last Name" />
        </div>
        <div className="address">
          <input onChange={(z)=>{setAddress(z.target.value)}} type="text" placeholder="Address" />
          <input onChange={(z)=>{setPincode(z.target.value)}} type="number" placeholder="Pincode" />
          <input onChange={(z)=>{setCountry(z.target.value)}} type="text" placeholder="Country" />
        </div>
      </div>
      
      <div className="proced_payment">
            <button onClick={handleGenerateBill}>Generate Bill</button>
       
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
