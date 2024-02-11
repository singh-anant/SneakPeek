import React from 'react'

const ProductPreview = ({ name, picture, description, price, sizes,details }) => {
  return (
   <div className="product-preview">
        <div className="product-preview-container">
            <div className="shoeImage">
            <img src={picture} alt="" className="logo"/>
            </div>
            <div className="product-preview-info">
                <div className="shoeName">
                    <div>
                        <h1 className="big">{name}</h1>
                    </div>
                    <h3 className="small">{details}</h3>
                </div>
                <div className="description">
                    <p className="text">{description}</p>
                </div>
                <div className="size-container">
                    <h3 className="title">size</h3>
                    <div className="sizes">
                      {sizes.map((size)=>{
                        return <span key={size} className="size">{size}</span>
                      })}
                </div>   
                </div>
                <div className="buy-price">
                    <div className="price">
                        <h1>${price}</h1>
                        <button className="product-add-to-cart-button">Add To Cart</button>
                        <button className="product-preview-close-button">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductPreview
