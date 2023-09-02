import React, { useContext, useEffect, useState } from 'react'
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
import { Context } from '../context/context';


const SingleProduct = ({product,country}) => {
const {money,basket,removeFromBasket,addToBasket} = useContext(Context);
const minumumWage = country.currency.hourlyWage*country.currency.hour;
const wageDifference = money > minumumWage ? parseFloat(money/minumumWage) : 0;
const [productInBasket,setProductInBasket] = useState(0);

useEffect(()=>{
  setProductInBasket(ProductCountInBasket());
ProductCountInBasket();
},[basket,removeFromBasket])



const ProductCountInBasket=()=>{
const CountryBasket = basket[country.id] || [];
let count=0;
for(let i=0;i<CountryBasket.length;i++){
if(CountryBasket[i].id===product.id){
  count+=CountryBasket[i].count;
}
}
return count;
}




let price;

if(wageDifference>0){
price=(wageDifference*product.price).toFixed(1);
}
else{
price=product.price;
}

  return (
    <div className='group my-4 px-4 py-4 rounded-lg border-2 flex justify-between items-center hover:border-app-light border-app-transparent  border-dashed shadow-lg'>
    <div className='flex flex-col'>
    <span className='text-app-white'>{product.name}</span>
   <span className='italic text-sm text-app-gray'>{price}{country.currency.symbol} { productInBasket > 1 ? " | " + (productInBasket * price).toFixed(1) + country.currency.symbol : null} </span>
    </div>
    <div className='flex items-center'>
      
    <span className='text-app-white '>{productInBasket === 0 ? null :  "("+productInBasket+")"}</span>
    <div className='flex'>
    <AiFillPlusCircle onClick={()=>{addToBasket(product,country)}} className='w-7 h-auto cursor-pointer ml-2 hidden group-hover:block text-app-white'/>
    <AiFillMinusCircle onClick={()=>{removeFromBasket(product)}} className='w-7 h-auto cursor-pointer  hidden group-hover:block text-app-white'/>
    </div>
    </div>
  </div>
  )
}

export default SingleProduct