import React from 'react'

const Toggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='hidden lg:flex items-center justify-center gap-1 flex-col'
    >
      <span
        className={`h-0.5 w-6 rounded-sm block transition-all ease-out delay-800 bg-dark dark:bg-light ${
          isOpen ? 'rotate-45 translate-y-[8px]' : 'rotate-0'
        }`}
      ></span>
      <span
        className={`h-0.5 w-6 rounded-sm block transition-all ease-out delay-800 bg-dark dark:bg-light ${
          isOpen ? 'opacity-0' : 'opacity-100'
        } `}
      ></span>
      <span
        className={`h-0.5 w-6 rounded-sm block transition-all ease-out delay-800 bg-dark dark:bg-light ${
          isOpen ? '-rotate-45 -translate-y-[4px]' : 'rotate-0'
        }`}
      ></span>
    </button>
  )
}

export default Toggle
