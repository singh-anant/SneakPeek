import { useEffect, useState } from 'react';
import { SHOES_API } from '../../utils/Helper';

const useGetAllSneakerInfo = () => {
const [resultAPI,setResultAPI]=useState();

const getSneakersData=async()=>{
    const data=await fetch(SHOES_API);
    const result=await data.json();
    setResultAPI(result?.sneakers);
}

useEffect(()=>{ 
    getSneakersData()
},[])

return resultAPI;
}

export default useGetAllSneakerInfo;
