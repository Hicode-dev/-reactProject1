import React from 'react'
import image1 from "../assets/13038.jpg";

const analytics = () => {
  return (
 <main className='bg-white w-full py-16 px-4'>

   <div className='max-w-[1240px] px-5 py-7 '>
  
    <div className='block  md:flex  py-9 justify-around items-center'>

<div><img src={image1} className="w-[500px] mx-auto my-4" alt="" /></div>
<div>
<p className='  md:text-2xl font-bold font-mono text-lime-500 uppercase'> data analytics dashboard</p>
   <p className='text-2xl md:text-3xl font-bold pb-3 uppercase mx-auto'>manage data analytics centrally</p>

<p className='max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo dolor voluptas delectus deleniti iure quo quisquam distinctio at accusantium.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo dolor voluptas delectus deleniti iure quo quisquam distinctio at accusantium.
</p>
<button className='p-2 px-10 mx-16 md:mx-0 bg-black text-white rounded-md mt-2 border-2'>get started</button>
</div>
    </div>
    
   </div>
 </main>
  )
}

export default analytics