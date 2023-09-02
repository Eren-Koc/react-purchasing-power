import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'

const SingleCartInformations = ({country}) => {
  const [basketTotalPrice,setBasketTotalPrice]=useState(0);
  const [basketCountryCount,setBasketCountryCount]=useState(0);
  const {basket,calculateBasketCountryTotalPriceAndTotalCount} = useContext(Context);
  
  useEffect(()=>{
    
    const basketTotalCount = calculateBasketCountryTotalPriceAndTotalCount(country,"count");
    const basketTotalCountryPrice =calculateBasketCountryTotalPriceAndTotalCount(country,"price");
    const PriceFixed = Number.isInteger(basketTotalCountryPrice) == true ? basketTotalCountryPrice : basketTotalCountryPrice.toFixed(1);
   setBasketTotalPrice(PriceFixed);
    setBasketCountryCount(basketTotalCount);
  },[basket])
  return (

    <div className='w-full px-3 flex flex-col'>
    <div className='flex bg-app-white mt-2 items-center font-[400] rounded-md w-full justify-between p-2 text-app-pink'>
    <span className=''>Total Balance Used:</span>
    <span className='font-bold'>{basketTotalPrice}</span>
    </div>
    <div className='flex bg-app-white mt-2 items-center font-[400] rounded-md w-full justify-between p-2 text-app-pink'>
    <span className=''>Products Count:</span>
    <span className='font-bold'>{basketCountryCount}</span>
    </div>
  </div>
  )
}

export default SingleCartInformations