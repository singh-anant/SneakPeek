import React from 'react'

const ProductCard = ({productName,brand,image,sneakerObj,setIsPreviewOpen,setPreviewData}) => {
  return (
    <div className='product-card' >
        <div className="product-card-container">
          <div className="product">
          <img src={image} alt="" />
          <h3>{productName}</h3>
          <div className="brand">{brand}</div>
        </div>
        </div>   
    </div>
  )
}

export default ProductCard
