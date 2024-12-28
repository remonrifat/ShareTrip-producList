import React from 'react'

const InputPrimary = ({type, register, errors, defaultValue, placeholder="Enter here", style="px-5 py-2 "}) => {
  return ( 
    <div className='my-2 w-full'>   
      <input 
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register}
        className={`w-full  px-5 py-0  focus:border-primary-300 focus:transition-all ease-in duration-700 delay-300 rounded-full ring-1 ring-inset ring-primary-300  focus:ring-2 focus:ring-inset  sm:text-sm leading-6 sm:leading-8 lg:leading-6 md:leading-8 ${style}`}
      />
      {errors && <span className='text-danger-500'>Is required</span>}
      </div>   
  )
}

export default InputPrimary