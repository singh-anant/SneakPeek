import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import {htmlToText} from 'html-to-text'
import ModalImage from '../components/ModalImage';
import useGetSneakerInfo from '../Hooks/useGetSneakerInfo';
import useCartStore from '../app/cartStore';
import useAmountStore from '../app/amountStore';



const ProductPreviewpage = () => {
  const {addSneaker} =useCartStore();
  const {addAmount}=useAmountStore();
  
  const [openModel,setOpenModal]=useState(false);
  const {index}=useParams();
  
  const sneaker= useGetSneakerInfo(index);

  return (
    <div className="product-preview">
        <div className="product-preview-container">
            <div className="shoeImage">
            <img src={sneaker?.main_picture_url} alt="" className="logo"
              onClick={()=>{setOpenModal(true)}}
            />
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
                <div className="buy-price">
                    <div className="price">
                        <h1>${Math.floor(sneaker?.retail_price_cents/100)}</h1>
                        <button className="product-add-to-cart-button"
                                onClick={()=>{
                                    addSneaker(sneaker)
                                    addAmount(Math.floor(sneaker?.retail_price_cents/100))
                                }}
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
      {openModel && <ModalImage setOpenModal={setOpenModal} image={sneaker?.main_picture_url}/>}  
    </div>
  )
}

export default ProductPreviewpage
