import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
    return (
        <main>
            <div className='text-white bg-black'>
                <div className='max-w-[800px] mt-[-96px] flex justify-center items-center w-full h-screen mx-auto flex-col    uppercase'>
                <p className=' text-[lightgreen] font-bold p-3 '>coddinng with data analytics</p>
                <h1 className='md:text-5xl font-bold sm:text-4xl text-4xl p-3 ' >grow with data</h1>
               <div className='flex items-center md:text-2xl font-bold sm:text-2xl text-1xl gap-2 ' >
               <p className='md:text-2xl font-bold sm:text-2xl text-1xl '>fast,flexible financing for</p>
                <p >
                <Typed 
                strings={['btb','btc',';sass']}
                typeSpeed={200}
                backSpeed={200}
                loop
                />
                </p>

               </div>

               <p className='capitalize md:text-2xl  text-xl mx-auto text-center  pt-3 font-bold text-gray-500'>monitor your data analytix to incrwase revenune for btc ,btb & sass platform</p>
               <button className='bg-green-400  rounded-md font-medium my-6 py-3 w-[200px] text-black capitalize'>get started</button>

                </div>
            </div>
        </main>
    )
}

export default Hero