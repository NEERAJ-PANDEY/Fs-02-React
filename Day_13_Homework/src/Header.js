import React from 'react'

function Header() {
  return (
    <>
     <div className=' max-h-max '  >
    <div className=' w-screen  flex items-center '>
    <div className=' w-[95%] p-10 items-center   flex-wrap md:flex md:justify-between'>
      <div  className='md:w-[40%] w-[90%]'><h1 className='text-3xl font-semibold'>Where Fitness Meets Fun and Results Are Achieved</h1></div>  
      <div className=' md:w-[60%] w-[90%]'><h1 >Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</h1></div> 
        </div>
    </div>
   
    <div className=' w-screen     '>
    <div className=' w-[100%] p-10   flex justify-between  '>
      <div  className='w-[50%] '>
          <div className='flex w-full justify-between h-[40%]'>
             <img className='w-[49%]'  src='https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg' alt='body'/>
            <img className='w-[49%]' src='https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg'  alt='body'/>
           
          </div>
           <div className='h-[60%]'>
             <img src='https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg' className='mt-2 w-full h-full' alt='body' />
           </div>
      </div>  
      <div className='w-[49%]'>
      
   
           <div className='h-[60%] '>
             <img src='https://wallpaperaccess.com/full/1087621.jpg' className=' w-full h-full' alt='body' />
           </div>
           <div className='flex w-full justify-between h-[40%] mt-2'>
             <img className='w-[49%]'  src='https://wallpapercave.com/wp/wp6331008.jpg' alt='body'/>
            <img className='w-[49%]' src='https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg'  alt='body'/>
           
          </div>

      </div> 
        </div>
    </div>
</div>
    </> 
  )
}

export default Header
 