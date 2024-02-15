import React, { useEffect, useState } from 'react'
import { SHOES_API } from '../../utils/Helper';



const useGetSneakerInfo = (index) => {
    const [sneaker,setSneaker]=useState();
    const getSneaker=async()=>{
    const data=await fetch(SHOES_API);
    const result=await data.json();
    setSneaker(result?.sneakers[index]);
}

    useEffect(()=>{
    getSneaker()
    },[])
return sneaker;
}

export default useGetSneakerInfo
