import React, { useEffect, useState } from 'react'
import {MdCompare} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdCompareArrows} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/context';

const Header = () => {
const {changeCartDisplay,basket,country1,country2} = useContext(Context);
const [allBasketCount,setAllBasketCount] = useState(0);
const getAllBasketCount =()=>{

  const Country1Basket = basket[country1.id] || [];
  const Country2Basket = basket[country2.id] || [];
  let totalBasketCount=0;
  for(let i=0;i<Country1Basket.length;i++){
totalBasketCount+=Country1Basket[i].count;
  }
  for(let y=0;y<Country2Basket.length;y++){
    totalBasketCount+=Country2Basket[y].count;
      }
  

  return totalBasketCount;
  
  
}

useEffect(()=>{
setAllBasketCount(getAllBasketCount());
},[basket])

  return (
    <header className='w-full fixed top-0 left-0 md:px-12 px-2 h-20 bg-black flex justify-between items-center'>
        <Link to="/">
       <div className='flex justify-center items-center'>
        <MdCompare className='w-9 h-auto text-app-white'/>
         <span className='text-app-white font-bold ml-2 md:text-2xl text-base uppercase'>purchasing power</span>
       </div>
       </Link>

       <span onClick={()=>{changeCartDisplay()}} className='p-2 cursor-pointer bg-app-light rounded-md flex justify-center items-center'><MdCompareArrows className='w-6 h-auto text-app-pink'/><span className='ml-1  text-app-pink'>{allBasketCount}</span></span> 
    </header>
  )
}

export default Header