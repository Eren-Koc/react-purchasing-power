import React, { useContext } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import { Context } from '../context/context';
import { ProductsData } from '../data/Products';

const SinlgeCartProduct = ({country,product}) => {

  const {addToBasket,basket,removeFromBasket} =useContext(Context);
  const calculatePrice=(product)=>{
    const updatedCountry = basket[product.countryId] || [];
    for(let x=0;x<updatedCountry.length;x++){
      if(updatedCountry[x].id===product.id){
        return (updatedCountry[x].price*updatedCountry[x].count).toFixed(1);
      }
    }
    
  }
  const findTrueProduct=(product,country)=>{
    for(let i=0;i<ProductsData[country.id].length;i++){
       if(ProductsData[country.id][i].id==product.id){
        return ProductsData[country.id][i];
       } 
    }
   
  }

  return (
    <div className='flex flex-col sm:bg-[#7A18E6] mt-2 w-full px-2 py-2 h-fit sm:shadow-md max-sm:border max-sm:border-app-light max-sm:border-opacity-40 rounded-md '>
    <div className="w-full h-fit">
      <span className='font-semibold text-app-white'>{product.name}</span>
    </div>
    <span className='mt-1 text-app-light italic text-sm'>{calculatePrice(product)}{country.currency.symbol}</span>
   <div className='flex justify-between items-center mt-4'>
    <span className='font-bold bg-app-white text-app-pink py-1 text-sm px-2 rounded-md'>{product.count}</span>
    <div className='flex items-center gap-[6px]'>
      <AiOutlinePlus onClick={()=>{addToBasket(findTrueProduct(product,country),country)}} className='bg-app-white p-1 rounded-md w-7 h-auto cursor-pointer text-app-pink '/>
      <AiOutlineMinus onClick={()=>{removeFromBasket(findTrueProduct(product,country))}} className='bg-app-white p-1 rounded-md  w-7 h-auto  cursor-pointer text-app-pink'/>
    </div>
   </div>
  </div>
  )
}

export default SinlgeCartProduct