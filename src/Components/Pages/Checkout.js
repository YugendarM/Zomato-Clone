import React from 'react'
import CartItemCard from '../Cards/CartItemCard';
import MyRadioGroup from '../CheckOut/MyRadioGroup';

function Checkout() {
  return (
    <>
      <div className='px-3 py-4 flex flex-col gap-3 container md:mx-auto lg:px-52'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl'>Summary</h1>
            <h1 className='text-lg font-semibold tracking-wider'>ORDER FROM</h1>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-400'>
            <h1 className='font-semibold'>Domino's Pizza</h1>
            <p className='text-sm font-medium'>GT World Mall, Magadi Road, Bangalore</p>
          </div>
        </div>
        <div className='lg:px-40'>
          <CartItemCard/>
          <CartItemCard/>
          <CartItemCard/>
        </div>
        <div className='lg:px-40 flex flex-col gap-3'>
          <h1 className='font-bold text-xl'>Choose Address</h1>
          <div>
            <MyRadioGroup/>
          </div>
          <div className='md:px-20 lg:px-32'>
            <button className='bg-zomato-btnpink text-white w-full py-3 px-16 rounded-md text-md font-medium'>Pay Securely</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout