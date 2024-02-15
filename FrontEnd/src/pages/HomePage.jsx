import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import useGetAllSneakerInfo from '../Hooks/useGetAllSneakerInfo';



const HomePage = () => {
const [search,setSearch]=useState('');


const resultAPI=useGetAllSneakerInfo();


  //Early Return
  if(!resultAPI) return null;
  return  resultAPI.length===0 ?
  (        <ShimmerSimpleGallery card imageHeight={300} />):(
    <>
    <Search setSearch={setSearch}/>
    <div className='homepage'>
        { resultAPI?.filter((sneaker)=>{
            if(search==='')
              return sneaker
            else if(sneaker?.name.toLowerCase().includes(search.toLowerCase())){
              return sneaker
            }
        })?.map((sneaker,index)=>{
        return <Link 
                      style={{textDecoration:'none',color:'black'}}
                      to={'/product/'+index}
                      key={sneaker?.id}
        >
                <ProductCard 
                sneakerObj={sneaker}
                productName={sneaker?.name}
                image={sneaker?.original_picture_url}
                brand={sneaker?.brand_name}
                />
                </Link>
                
  })
  }
    
    </div>
     </> 
  )
}

export default HomePage
