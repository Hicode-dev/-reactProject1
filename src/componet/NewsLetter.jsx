import React from 'react';

const NewsLetter = () => {
  return (
    <div>
      <div className='text-white bg-black w-full py-16'>
    <div className='block md:flex justify-between max-w-[1100px] px-2 mx-auto '>
    <div>
                <h1 className='font-bold text-2xl md:text-3xl '>want tips & trick to optimize your flow</h1>
                <p className='font-bold'>sign up to our newsletter to stay update</p>
            </div>
            <div className=''>
                <input type="text" className='p-3 rounded-md w-full  ' /> 
                <button className=' bg-lime-600 px-5 py-3 font-bold 3xl rounded-md ml-2'>suscribe</button>
                <p>we care about the protection of your data read our</p>
                <p className='text-lime-600 underline'>privacy policy</p>
            </div>
    </div>
      </div>
    </div>
  );
}

export default NewsLetter;
