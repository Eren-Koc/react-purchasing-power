import React, { useContext, useEffect, useState } from 'react'
import {BiSolidDownArrow} from 'react-icons/bi';
import { Context } from '../context/context';
import {PiMoneyFill} from 'react-icons/pi';

const SingleCountry = ({country,id}) => {
    const {money,basket,calculateAvailableBalanceForCountry} = useContext(Context);
    const minumumWage = country.currency.hourlyWage*country.currency.hour;
    const wageDifference = money > minumumWage ? parseFloat(money/minumumWage) : 0;
    const [availableBalance,setAvailableBalance]=useState(0);
  

 const ChangeCountry =(id)=>{
  const menu=document.getElementById("change-country-menu-"+id);
  const dropdownIcon=document.getElementById("country-dropdown-icon-"+id);
  if(menu.style.display=="none"){
    menu.style.display="flex";
  
  }
  else{
    menu.style.display="none";

  }
 }

 

useEffect(()=>{
  setAvailableBalance(calculateAvailableBalanceForCountry(country));
},[basket,[]])
  return (
    
    <span onClick={()=>{ChangeCountry(id)}} className='sticky cursor-pointer top-0 w-full country p-2 mb-6 bg-app-white rounded-lg flex justify-between shadow-sm items-center text-app-purple'>
      <span className='absolute left-0 bottom-[-30px] w-fit z-[4] h-10  px-3 bg-app-purple rounded-lg text-app-white font-bold flex  justify-left items-center'><PiMoneyFill className='mr-2 text-app-white w-6 h-auto'/>{availableBalance}</span>
    <div  className='flex items-center'>
    <img src={country.image} className='w-[48px]' alt="" />
     <span className='text-app-black sm:text-xl ml-4 font-bold'>{country.name}</span>
    </div>
    <div className='flex items-center'>
     <span className='font-bold'>{wageDifference >0 ? "+(%"+(wageDifference*100-100).toFixed(1)+")" : null}</span>
     <BiSolidDownArrow id={"country-dropdown-icon-"+id}  className='ml-4 cursor-pointer text-app-black h-auto w-5'/>
     </div>
   </span>
  
  )
}

export default SingleCountry