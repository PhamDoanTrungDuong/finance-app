//@ts-nocheck
import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics: React.FC = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTISC DASHBOARD</p>
              <h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h3>
              <p className='font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto voluptas quam numquam porro veniam, vitae ea provident earum reiciendis at quod, vel natus. At dicta libero soluta vitae praesentium eum.
              </p>
              <button className='bg-black w-[150px] text-[#00df9a] hover:text-gray-50 duration-200 rounded-md font-medium my-6 p-2 mx-auto md:mx-0 shadow-sm'>Get Started</button>
            </div>
      </div>
    </div>
  )
}

export default Analytics