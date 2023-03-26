import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[18px] text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button