import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonTab = ({setTab, tab, name="Home", style="bg-primary-500"}) => {  
  
  return (
       <button className={`hover:transition-all ease-in duration-700 delay-700 rounded-full mx-1 mt-1  inline-block capitalize text-[15px] leading-4 py-1 px-3  ${tab === name ? 'bg-primary-900 text-secondary-100 border-b-2 border-primary-500' : 'text-secondary-100  hover:text-secodary-100 bg-primary-500 hover:bg-secondary-900'} ${style}`}
         onClick={()=>setTab(name)}
       >
        {name}
        </button>
  )
}

export default ButtonTab