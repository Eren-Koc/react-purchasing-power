import React, { useContext } from 'react'
import {AiOutlineCheckCircle,AiFillCheckCircle} from 'react-icons/ai';
import { Context } from '../context/context';
import { CountriesData } from '../data/Countries';
import {AiOutlineClose} from 'react-icons/ai';
const OptionCountry = ({id}) => {
const {country1,country2,setCountry1,setCountry2} = useContext(Context);

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

  return (
    <div style={{display:"none"}} id={"change-country-menu-"+id} className='w-full fixed flex-col px-6 top-0 left-0 h-full bg-app-black/25 z-50 flex justify-center items-center'>
     
    <div className='py-4 px-4 mx-4 w-full max-w-[500px] max-h-[400px] overflow-auto h-fit bg-app-light rounded-md'>
    <div className='pb-4 text-xl items-center flex justify-between w-full'>
      <span>Choose a Country</span>
      <AiOutlineClose onClick={()=>{ChangeCountry(id)}} className='w-6 h-auto cursor-pointer'/>
    </div>
      {CountriesData.map(sectionCountry =>{
        
        if(sectionCountry.id!==country1.id && sectionCountry.id!==country2.id){
          return(
            
          <div onClick={()=>{id==0 ? setCountry1(sectionCountry) : setCountry2(sectionCountry)}} key={"section-country-"+sectionCountry.id} className='group py-3 px-2 border my-2 overflow-auto text-app-black hover:text-app-white hover:bg-app-purple duration-300 cursor-pointer justify-between border-app-purple w-full rounded-md border-dashed text-xl font-semibold flex items-center'>
          <div className='flex items-center'>
          <img src={sectionCountry.image} className='w-8 h-auto mr-2' alt="" />
          <span>{sectionCountry.name}</span>
          </div>
          <AiFillCheckCircle className='group-hover:block hidden w-6 h-auto text-app-white'/>
          <AiOutlineCheckCircle className='block group-hover:hidden w-6 h-auto text-app-purple'/>
        
        </div>
          )
        }
        else{
          return null;
        }
      })}

        
</div>
        </div>
  )
}

export default OptionCountry