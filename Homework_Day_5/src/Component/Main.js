import React from 'react'

function Main() {
  return (
    <div className='mainbar h-max  border mt-12'>
      <div className='w-1/2'>
        <h1 className='text-5xl font-bold p-2'>Let us find your <br /> <span className=' text-rose-800'>Forever Food.</span></h1>
        <p className='pt-3 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <button type="button" class="text-white hover:text-white mt-5 w-52 hover:bg-red-800 bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Search</button>
        <span>
          <button type="button" class="text-red-600 hover:text-red-900 mt-5 w-52 border  bg-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            know more
          </button></span>
      </div>
    </div>
  )
}

export default Main