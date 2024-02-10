import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { SHOES_API } from '../../utils/Helper'

const HomePage = () => {
  const [resultAPI,setResultAPI]=useState(); 

  const getSneakersData=async()=>{
    const data=await fetch(SHOES_API);
    const result=await data.json();
    setResultAPI(result?.sneakers);
    console.log(resultAPI);
  }


  useEffect(()=>{ 
    getSneakersData()

  },[])
  return (
    <div className='homepage'>
   {resultAPI?.map((sneaker)=>{

  return <ProductCard key={sneaker?.id} productName={sneaker?.name} image={sneaker?.original_picture_url} brand={sneaker?.brand_name}/>
   })
   }
   
    
    </div>
  )
}

export default HomePage
