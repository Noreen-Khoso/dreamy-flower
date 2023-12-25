import React from 'react'
import cover from "../Assets/bgg2.jpeg"



const Hero = () => {
  return (
    <>
    <div className='  w-full h-screen px-2'>
    <img src={cover} alt="" className=' top-0 left-0 w-full h-screen object-cover' />
    <div className='bg-black/5 absolute top-0 left-0 w-full h-screen object-cover ' />
    <div className=' absolute left-0 top-0 w-full  h-screen flex items-center  justify-center'>
        {/* <div className='  rounded-xl absolute top-4 mx-10 px-20 w-full'>
            <NavBar/>
            </div> */}
            <div className=' container flex flex-col justify-center items-center max-w-[1100px] m-auto   px-10  md:px-5 '>
                {/* <p className=' text-2xl text-center'>Welcome to</p> */}
                <h1 className=' uppercase text-black font-bold  text-3xl md:text-5xl drop-shadow-2xl gap-5 text-center '>  Dreamy Flower </h1>
                <h1 className='  text-2xl md:text-3xl font-bold text-green-950' >
                           Send Beautiful Flower Today 
                  
                </h1>
                <p className=' max-w-screen font-bold  drop-shadow-2xl py-2 text-xl md:text-2xl text-slate-950 '>
                Brighter Someone’s day with our stunning flowers arrangments.
                </p>
                

                <button className=' button '>Contact Now</button>
                 

            </div>
        <div>

        </div>

    </div>

    </div>
        
        </>
  )
}

export default Hero