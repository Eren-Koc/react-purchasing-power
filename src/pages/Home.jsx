import React, { useContext, useState } from 'react'


import { CountriesData } from '../data/Countries';
import { ProductsData } from '../data/Products';
import SingleProduct from '../components/SingleProduct';
import SingleCountry from '../components/SingleCountry';
import { Context } from '../context/context';
import OptionCountry from '../components/OptionCountry';



const Home = () => {
 const {addToBasket,removeFromBasket,basket,money,setMoney,country1,country2} = useContext(Context);
 


  return (
    <div className='w-full lg:px-12 px-2 pt-24 h-screen flex flex-col justify-center items-center'>
    <div className='content md:gap-12 max-w-[1000px] md:pr-4 w-full flex max-md:flex-col overflow-auto lg:h-[500px] max-lg:h-fit'>
   
    
    {CountriesData.map(country=>{
      if(country.id==country1.id){
       return (
        <div className='md:w-1/2 max-md:px-2 max-md:w-full h-fit flex flex-col ' key={"country-"+country.id}>
         <OptionCountry id={0} />
       <SingleCountry id={0} country={country} />

       {ProductsData[country.id].map(product => (
        <SingleProduct country={country} product={product} key={"product-"+ product.id}/>
        ))}
         </div>
        );
        
       
      }
      else{
        return null;
      }
      
    })}
    
    <div className='max-md:w-full h-full md:w-[60px] pt-4 italic text-center text-xl font-bold text-app-light max-lg:mb-4 hidden max-md:block'>VS.</div>

    {CountriesData.map(country=>{
      if(country.id==country2.id){
       return (
        <div className='md:w-1/2 max-md:px-2 max-md:w-full h-fit flex flex-col' key={country.id}>
        <OptionCountry id={1} />
       <SingleCountry id={1} country={country}  />

       {ProductsData[country.id].map(product => (
        <SingleProduct country={country} product={product} key={product.id}/>
        ))}
         </div>
        );
        
       
      }
      else{
        return null;
      }
      
    })}
    
    </div>
    </div>
  )
}

export default Home