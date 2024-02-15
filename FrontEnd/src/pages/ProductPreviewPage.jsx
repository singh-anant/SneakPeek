import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SHOES_API } from '../../utils/Helper';
import {htmlToText} from 'html-to-text'
import { FiShoppingCart } from "react-icons/fi";


const ProductPreviewpage = () => {
  const [sneaker,setSneaker]=useState();
  const {index}=useParams();
  
  const getSneaker=async()=>{
    const data=await fetch(SHOES_API);
    const result=await data.json();
    setSneaker(result?.sneakers[index]);
    console.log(sneaker);
  }



  useEffect(()=>{ 
    getSneaker()
  },[])

  return (
     <div className="product-preview">
        <div className="product-preview-container">
            <div className="shoeImage">
            <img src={sneaker?.main_picture_url} alt="" className="logo"/>
            </div>
            <div className="product-preview-info">
                <div className="shoeName">
                    <div>
                        <h1 className="big">{sneaker?.name}</h1>
                    </div>
                    <h3 className="small">{sneaker?.details}</h3>
                </div>
              <div className="description">
                    <p className="text">{htmlToText(sneaker?.story_html,{
                         wordwrap: 130
                    })}</p>
                </div>
                {/* <div className="size-container">
                    <h3 className="title">size</h3>
                        <div className="sizes">
                        {sneaker?.size_range?.map((size, index) => (
                            <span key={index} className="size">{size}</span>
))}
                </div>
                </div> */}
                <div className="buy-price">
                    <div className="price">
                        <h1>${Math.floor(sneaker?.retail_price_cents/100)}</h1>
                        <button className="product-add-to-cart-button">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPreviewpage
