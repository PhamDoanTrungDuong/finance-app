import React from 'react'

const NewsLetter: React.FC = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-5'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                  <p className='font-medium'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                  <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" className='p-3 flex text-black w-full rounded-md' placeholder='example@gmail.com' />
                        <button className='bg-[#00df9a] w-[200px] text-[#000300] hover:text-gray-50 duration-200 rounded-md font-medium my-6 px-6 py-3 ml-3'> Notify Me</button>
                  </div>
                  <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy</span></p>
            </div>
      </div>
    </div>
  )
}

export default NewsLetter