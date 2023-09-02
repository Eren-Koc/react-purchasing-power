import React, { createContext, useState, useEffect } from 'react'
import { CountriesData } from '../data/Countries';
export const Context = createContext(null);

export const ContextProvider = (props) => {

const [cartOpen,setCartOpen] = useState(false);
const [basket,setBasket] = useState({});
const [country1,setCountry1]=useState(CountriesData[0]);
const [country2,setCountry2]=useState(CountriesData[1]);
const [money,setMoney] = useState(0);

 useEffect(()=>{
   calculateMinumumWage();
 },[country1,country2])  

 useEffect(()=>{
  calculateMinumumWage();

},[])  

 useEffect(()=>{
  setBasket({});
 },[country1,country2])


const calculateAvailableBalanceForCountry=(country)=>{
const balanceUsed = calculateBasketCountryTotalPriceAndTotalCount(country,"price");
const available=money-balanceUsed;
const intCheck = Number.isInteger(available) == true ? available : available.toFixed(1);
return intCheck;
}


const calculateBasketCountryTotalPriceAndTotalCount=(country,query)=>{
  const updatedCountry = basket[country.id] || [];
  let totalPrice=0;
  let totalCount=0;
  for(let i=0;i<updatedCountry.length;i++){
    totalPrice+=updatedCountry[i].price*updatedCountry[i].count;
    totalCount+=updatedCountry[i].count;
  }
  if(query=="price"){
    return totalPrice;
  }
  else{
    return totalCount;
  }
  
 }

 const calculateMinumumWage =()=>{
  const Country1Wage=country1.currency.hour*country1.currency.hourlyWage;
  const Country2Wage=country2.currency.hour*country2.currency.hourlyWage;
  setMoney(Country1Wage>=Country2Wage ? Country1Wage : Country2Wage);
}

 const changeCartDisplay=()=>{

  const cartMenu=document.getElementById("cart");
  setCartOpen(!cartOpen);
  const set=!cartOpen;

  if(!set){
    cartMenu.style.display="none";
  }
  else{
    cartMenu.style.display="flex";
  }
}


const addToBasket = (product,country) => {

  const minumumWage = country.currency.hour * country.currency.hourlyWage;
  const wageDifference = money > minumumWage ? parseFloat(money/minumumWage) : 1;

  
  const productPrice = (wageDifference*product.price).toFixed(1);
  const countryId = product.countryId;
 
    const existingBasket = basket[countryId] || [];

    const updatedProduct = Object.assign({}, product, { price: Number(productPrice) });
    const basketTotalPrice = calculateBasketCountryTotalPriceAndTotalCount(country,"price");

    if(basketTotalPrice + updatedProduct.price <= money){
      const existingProduct = existingBasket.find((p) => p.id === updatedProduct.id);
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        existingBasket.push(updatedProduct);
      }
  
      setBasket((prevBasket) => ({
        ...prevBasket,
        [countryId]: existingBasket,
      }));
    }
    else{
      alert("You can't add this product to card. You don't have enough money.");
    }

  

 
};
const removeFromBasket=(product)=>{

  const countryId = product.countryId;
  const existingBasket = basket[countryId] || [];
  const existingProduct = existingBasket.find((p) => p.id === product.id);
  if (existingProduct) {
    if(existingProduct.count>1){
      existingProduct.count -= 1;  
      setBasket((prevBasket) => ({
        ...prevBasket,
        [countryId]: existingBasket,
      }));
    }
    else{
      const updatedBasket = existingBasket.filter((p) => p.id !== product.id);
      setBasket((prevBasket) => ({
        ...prevBasket,
        [countryId]: updatedBasket,
      }));
    }   
  } 

 
}


const contextvalue={addToBasket,removeFromBasket,basket,money,setMoney,country1,country2,setCountry1,setCountry2,changeCartDisplay,calculateBasketCountryTotalPriceAndTotalCount,calculateAvailableBalanceForCountry,calculateMinumumWage};
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  )
}
