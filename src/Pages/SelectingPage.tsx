import { NavLink } from 'react-router'
import FoodSection from '../Component/FoodSection'
import Header from '../Component/Header'
import NavBar from '../Component/NavBar'
import SearchOrder from '../Component/SearchOrder'

import type {Cart} from '../BE/type'
import {useState } from 'react'


type Props = {
    cart:Cart[]
    setCart:React.Dispatch<React.SetStateAction<Cart[]>>
}


function SelectingPage({cart,setCart}:Props) {
    //search yang ada di search order dengan yang disini beda
    const [search,setSearch] = useState('')
    return (
        <>
            <title>Select Food</title>
            <div className='fixed top-0 left-0 right-0'>
                <Header />
                <div className='h-px bg-black'></div>
                <SearchOrder setPencarian={setSearch} />
                <NavBar />
            </div>
            <div className='mt-44'>
                <FoodSection isCart={false} cart={cart} setCart={setCart} search={search}/>
                <NavLink to={'/Cart'}>
                    <div className='flex items-center justify-center fixed bottom-0 right-0 bg-indigo-500 hover:bg-indigo-600 w-25 aspect-square rounded-2xl m-10 shadow-stone-700 shadow-lg/40  cursor-pointer'>
                        <img src="/Cart.png" alt="" className='h-5/10'/>
                        <div className='absolute -top-3 -left-3 bg-red-500 aspect-square w-10 rounded-full flex justify-center items-center shadow-red-800 shadow-lg/40 text-white '>
                        {cart.reduce((acc,item)=>{return acc+ item.quantity},0)}
                        </div>
                    </div> 
                </NavLink>
            </div>
        </>
    )
}

export default SelectingPage