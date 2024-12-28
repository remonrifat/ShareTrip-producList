import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPrimary = ({onclick, text="Button", bg="bg-primary-500"}) => {
  // const navigate = useNavigate();
  return (
       <button className={`hover:transition-all ease-in duration-700 delay-700 hover:bg-primary-900 text-text-primary-100 px-5 py-2 rounded-full mx-2 mt-5 ${bg}`}
         onClick={onclick}
       >
        {text}
        </button>
  )
}

export default ButtonPrimary