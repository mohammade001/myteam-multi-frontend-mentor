import { inputType } from '@/type'
import React from 'react'

function CompontInput({type,placeholder,name,value,onChange,error}:inputType) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full outline-none text-white font-[550] border-b pl-4 py-1 
    focus:border-secondary-rapture-blue ${
      error !== ""
        ? "border-primary-light-coral placeholder:text-primary-light-coral/70"
        : "border-white placeholder:text-gray-400"
    }`}
      />
      <p className={`font-[550] pl-4 text-[13px] text-primary-light-coral`}>
        {error}
      </p>
    </>
  );
}

export default CompontInput