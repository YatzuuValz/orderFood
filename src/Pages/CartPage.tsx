import React from 'react'
import Header from '../Component/Header'
import FoodSection from '../Component/FoodSection'
import { NavLink } from 'react-router'

import type { Cart } from '../BE/type'

type Props = {
    cart:Cart[]
    setCart:React.Dispatch<React.SetStateAction<Cart[]>>
}


function CartPage({cart,setCart}:Props) {
    return (
        <>
            <div className='fixed top-0 left-0 right-0'>
                <Header />
                <div className='h-px bg-black'></div>
                <div className='flex justify-center bg-neutral-700 p-3 h-14 gap-10'>
                    <NavLink to={'/'} className='flex items-center justify-center  bg-green-600 hover:bg-green-700 rounded-2xl w-1/3 shadow-stone-700 shadow-lg/40 cursor-pointer'>
                        <button >
                            Add More
                        </button>
                    </NavLink>
                    <NavLink to={'/Order'} className='flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-2xl w-1/2 shadow-stone-700 shadow-lg/40 cursor-pointer'>
                        <button >
                            Order Now
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className='mt-29 h-full'>
                {cart.length === 0? 
                <div className='flex justify-center items-center'>
                    <div className=' fixed flex justify-center items-center top-50  bg-gray-500/80 w-1/2 lg:w-1/3 aspect-4/1 rounded-3xl'>
                        <p>nothing's in here</p>
                    </div>
                </div>
                :
                <FoodSection isCart={true} cart={cart} setCart={setCart}/>}
            </div>
                

        </>
    )
}

export default CartPage