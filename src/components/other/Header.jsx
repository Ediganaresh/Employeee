import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium'>Hello<br></br><span className='text-3xl font-semibold'>Naresh👋</span></h1>
      <button className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>LogOut</button>
    </div>
  )
}

export default Header;
