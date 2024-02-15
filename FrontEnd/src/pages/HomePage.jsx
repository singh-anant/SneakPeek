import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { SHOES_API } from '../../utils/Helper';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Search from '../components/Search';
import { Link } from 'react-router-dom';



const HomePage = () => {
const [resultAPI,setResultAPI]=useState();
const [search,setSearch]=useState('');


  const getSneakersData=async()=>{
    const data=await fetch(SHOES_API);
    const result=await data.json();
    setResultAPI(result?.sneakers);
  }


  useEffect(()=>{ 
    getSneakersData()
  },[])


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
