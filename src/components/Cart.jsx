import React, { useContext } from 'react'
import { Context } from '../context/context'
import {AiOutlineClose} from 'react-icons/ai';
import { CountriesData } from '../data/Countries';
import {ProductsData} from '../data/Products';
import SinlgeCartProduct from './SinlgeCartProduct';
import SingleCartCountry from './SinlgeCartCountry';
import SingleCartInformations from './SingleCartInformations';
const Cart = () => {
    const {addToBasket,removeFromBasket,basket,money,setMoney,country1,country2,changeCartDisplay} = useContext(Context); 



  return (
    <div id='cart' className='hidden overflow-auto top-0 fixed z-30 right-0 pt-12 pb-4 backdrop-blur-lg shadow-md  max-sm:min-h-screen h-full rounded-bl-lg w-full max-w-[600px] max-sm:flex-col'>
    <div className='z-[31] top-0 left-0 px-3 absolute w-full h-12 flex items-center justify-between'>
      <span className='text-xl text-app-white font-bold'>Compare</span>
      <AiOutlineClose onClick={()=>{changeCartDisplay()}} className='cursor-pointer w-8 font-extrabold shadow-md h-auto  text-app-white p-1 rounded-md'/>
    </div>


{CountriesData.map((country,idx)=>{
  if(country.id==country1.id){
    const CountryBasket = basket[country.id] || [];
return(
<div className="sm:w-1/2 max-sm:h-fit max-sm:w-full max-sm:my-4 flex flex-col sm:border-r border-app-white" key={country.id}>

<SingleCartCountry country={country}/>

<div className="cart-products overflow-auto w-full px-3 flex flex-col mt-4 sm:h-[80%] max-sm:h-fit">


{CountryBasket.map(product => (
       <SinlgeCartProduct product={product} key={"product-cart-"+product.id} country={country}/>
))}



</div>

<SingleCartInformations country={country}/>

</div>
)
  }
  else{
    return null;
  }
})}
    

<div className='w-full h-fit max-[640px]:block hidden italic text-center text-xl font-bold my-4 text-app-light'>VS.</div>

 {CountriesData.map((country,idx)=>{
  if(country.id==country2.id){
    const CountryBasket = basket[country.id] || [];
return(
<div className="sm:w-1/2 max-sm:h-fit max-sm:w-full max-sm:my-4 flex flex-col " key={country.id}>

<SingleCartCountry country={country}/>

<div className="cart-products overflow-auto w-full px-3 flex flex-col mt-4 sm:h-[80%] max-sm:h-fit">


{CountryBasket.map(product => (
       <SinlgeCartProduct product={product} key={"product-cart-"+product.id} country={country}/>
))}



</div>

<SingleCartInformations country={country}/>

</div>
)
  }
  else{
    return null;
  }
})} 

    </div>
  )
}

export default Cart