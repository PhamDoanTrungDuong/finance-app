// @ts-nocheck
import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards: React.FC = () => {
  return (
    <div className='w-full px-4 py-[10rem] bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                  <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img src={Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                              <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                              <p className='py-2 border-b mx-8'>1 Granted User</p>
                              <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                        </div>
                        <button className='bg-[#00df9a] w-[150px] text-[#000300] hover:text-gray-50 duration-200 rounded-md font-medium my-6 p-2 mx-auto'>
                              Start Trial
                        </button>
                  </div>
                  <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                        <img src={Double} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                              <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                              <p className='py-2 border-b mx-8'>1 Granted User</p>
                              <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                        </div>
                        <button className='text-[#00df9a] w-[150px] bg-[#000300] hover:text-gray-50 duration-200 rounded-md font-medium my-6 p-2 mx-auto'>
                              Start Trial
                        </button>
                  </div>
                  <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img src={Triple} alt="/" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
                        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                              <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                              <p className='py-2 border-b mx-8'>1 Granted User</p>
                              <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                        </div>
                        <button className='bg-[#00df9a] w-[150px] text-[#000300] hover:text-gray-50 duration-200 rounded-md font-medium my-6 p-2 mx-auto'>
                              Start Trial
                        </button>
                  </div>
            </div>
    </div>
  )
}

export default Cards