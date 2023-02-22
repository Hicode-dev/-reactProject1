import React from 'react'
import { GrUserExpert } from 'react-icons/gr'

const Cards = () => {
  return (
    <div  className='w-full py-10 bg-white '>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-x-3'>
            <div className='w-full mx-auto flex flex-col gap-x-4 justify-between shadow-2xl rounded-lg hover:scale-105  hover:bg-gray-200 duration-500 ease-out items-center py-6 gap-y-3 '>
                <GrUserExpert size={60} className=""  />
                <p className='font-bold text-md uppercase'>group account </p>
                <p className='font-bold uppercase text-3xl'>$299</p>
                <p className='font-bold'>5 trabyte of storage</p>
                <p className='font-bold'>10 users allowed</p>
                <p className='font-bold'>semd up to 50 people</p>

                <button className='bg-green-400 font-medium my-6 py-3 w-[200px] rounded-lg hover:bg-gray-200   text-black capitalize'>get started</button>

            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center shadow-2xl rounded-lg hover:bg-gray-200 hover:scale-110 duration-200 ease-out py-6 gap-y-3 '>
                <GrUserExpert size={60} className="mx-auto"  />
                <p className='font-bold text-md uppercase'>group account </p>
                <p className='font-bold uppercase text-3xl'>$299</p>
                <p className='font-bold'>5 trabyte of storage</p>
                <p className='font-bold'>10 users allowed</p>
                <p className='font-bold'>semd up to 50 people</p>

                <button className='bg-green-400  rounded-md font-medium my-6 py-3 w-[200px] text-black capitalize'>get started</button>

            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center shadow-2xl hover:scale-110 duration-200 ease-out py-6 gap-y-3 '>
                <GrUserExpert size={60} className="mx-auto"  />
                <p className='font-bold text-md uppercase'>group account </p>
                <p className='font-bold uppercase text-3xl'>$299</p>
                <p className='font-bold'>5 trabyte of storage</p>
                <p className='font-bold'>10 users allowed</p>
                <p className='font-bold'>semd up to 50 people</p>

                <button className='bg-green-400  rounded-md font-medium my-6 py-3 w-[200px] text-black capitalize'>get started</button>

            </div>
          
      </div>
    </div>
  )
}

export default Cards
