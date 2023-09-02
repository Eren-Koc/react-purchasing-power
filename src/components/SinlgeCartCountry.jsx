import React, { useContext, useEffect, useState } from 'react'
import {PiMoneyFill} from 'react-icons/pi';
import { Context } from '../context/context';


const SinlgeCartCountry = ({country}) => {
  const {money,basket,calculateAvailableBalanceForCountry} =useContext(Context);
  const minumumWage = country.currency.hourlyWage*country.currency.hour;
  const wageDifference = money > minumumWage ? parseFloat(money/minumumWage) : 0;
  const [availableBalance,setAvailableBalance] = useState(0);

  useEffect(()=>{
    setAvailableBalance(calculateAvailableBalanceForCountry(country));
  },[basket])

  return (
    <div className=' flex items-center w-full justify-between px-3'>
  
    <div className='sticky max-sm:top-6 flex items-center justify-between bg-app-white w-full px-2 py-3 rounded-sm'>

   
    {wageDifference >0 ? ( <div className='absolute z-[32] bottom-[-20px] left-0 shadow-md rounded-md bg-app-white px-1 text-center py-1 text-app-pink'>{"+(%"+(wageDifference*100-100).toFixed(1)+")"}</div> ) : null} 
     <div className='flex items-center'>
    <img src={country.image} className='w-[32px]' alt="" />
     <span className='ml-2 font-semibold text-app-black'>{country.name}</span>
     </div>
     
     <span className='bg-app-pink text-app-white rounded-md flex items-center gap-1 py-1 px-2 '>
       <PiMoneyFill className='w-6 h-auto text-app-white'/>{availableBalance}</span>
    </div>
 </div>
  )
}

export default SinlgeCartCountry