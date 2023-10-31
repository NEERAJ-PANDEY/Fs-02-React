import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='heading p-2  px-4'>
        <h1 className='text-4xl text-rose-700 my-2'>Family Wellness</h1>
        <p className='px-1 font-bold text-xl'>Massage Therapy</p>
      </div>
      <div className='nav link bg-slate-300'>
        <ul className='flex justify-between mx-1'>
          <li className='w-1/5 p-4 font-bold hover:bg-rose-700 hover:text-white'>Home</li>
          <li className='w-1/5 p-4 font-bold hover:bg-rose-700 hover:text-white'>About</li>
          <li className='w-1/5 p-4 font-bold hover:bg-rose-700 hover:text-white'>Services</li>
          <li className='w-1/5 p-4 font-bold hover:bg-rose-700 hover:text-white'>FAQ</li>
          <li className='w-1/5 p-4 font-bold hover:bg-rose-700 hover:text-white'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header