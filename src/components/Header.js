import React from 'react'

function Header() {
  return (
    <div className='bg-transparent text-white p-2 hidden lg:flex justify-between items-center'>
        <div className='left-section mt-1'>
            <div className='ml-10'>
            <img className='w-10 h-8 lg:w-20 lg:h-16  rounded-full' src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg" alt="" />
            </div>
        </div>
        <div className='right-section flex justify-center mr-10 '>
            <div className='sections flex  items-center gap-3 lg:gap-10 text-xl '>
                
                <div>
                <a href="#"
        className="relative  font-medium text-white transition-all duration-300 ease-in-out 
             before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-[3px] 
             before:bg-red-700 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 
             hover:before:w-full"
      >About</a>                </div>
                <div>
                    <a href="#skills"  className="relative  font-medium text-white transition-all duration-300 ease-in-out 
             before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-[3px] 
             before:bg-red-700 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 
             hover:before:w-full">Skills</a>
                </div> 
                <div>
                    <a href="#projects"  className="relative  font-medium text-white transition-all duration-300 ease-in-out 
             before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-[3px] 
             before:bg-red-700 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 
             hover:before:w-full" >Projects</a>
                </div>
                <div>
                    <a href="#contact"  className="relative font-medium text-white transition-all duration-300 ease-in-out 
             before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-[3px] 
             before:bg-red-700 before:transform before:-translate-x-1/2 before:transition-all before:duration-300 
             hover:before:w-full">Contact</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header