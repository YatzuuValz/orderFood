import React, { useState } from 'react'
import type { Food,Cart } from '../BE/type'

type Prop = {
    isCart: boolean
    food:Food&{quantity?:number}
    cart:Cart[]
    setCart:React.Dispatch<React.SetStateAction<Cart[]>>
}

function FoodItem({ isCart,food,cart,setCart }: Prop) {
    const [quantity, setQuantity] = useState(food.quantity?? 1)

    function handleAddDelete(button:string){
        if(button === 'add'){
            let found = false
            //cari apakah item yang sama sudah ada
            const updatedCart = cart.map((item)=>{
                if(item.name === food.name){
                    found = true
                    item.quantity += quantity
                }
                return item
            })
            // jika ada maka di ubah quantitynya aja
            if(found){
                setCart(updatedCart)
                localStorage.setItem('cart',JSON.stringify(updatedCart))
                return
            }
            //kalau ndak ada berarti buat dari object baru
            localStorage.setItem('cart',JSON.stringify([...cart,{...food,quantity}]))
            setCart([...cart,{...food,quantity}])
        }
        else{
            const updatedCart = cart.filter((item)=>(item.name !== food.name))
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            setCart(updatedCart)
        }
    }
    return (
        <div className='flex border p-7 gap-4 hover:bg-zinc-200 cursor-pointer' onClick={()=>{}}>
            {/* img */}
            <div className='flex items-center justify-center w-6/10'>
                <img className='w-1/1 aspect-square object-cover rounded-xl shadow-md/30 shadow-black' src={`/Makanan/${food.Img}`} alt="" />
            </div>
            {/* second div */}
            <div className='flex flex-col justify-around w-full'>
                <p className=''>{food.name}</p>
                <p>{food.price}</p>
                {/* input div */}

                <div className='flex '>
                    <button className='border-solid border border-black aspect-square bg-gray-400 hover:bg-gray-500' 
                        onClick={() =>{
                            if(quantity>1){
                                setQuantity(quantity - 1)
                                if(food.quantity){
                                    food.quantity--
                                }
                            }}}
                        >-
                    </button>

                        <p className='border-solid border border-black w-1/5 px-2'>{quantity}</p>

                    <button className='border-solid border h-1/1 border-black aspect-square bg-gray-400 hover:bg-gray-500'
                        onClick={() => {
                            setQuantity(quantity + 1)
                            if(food.quantity){
                                    food.quantity++
                            }
                        }}
                        >+
                    </button>
                </div>
                {isCart ?
                    // untuk bagian cart page
                    <button 
                        onClick={()=>{handleAddDelete('Delete')}}
                        className='bg-red-600 hover:bg-red-700  min-w-30 px-3 py-3 mt-3 w-2/4 text-nowrap text-white place-self-center shadow-stone-700 shadow-md/20  cursor-pointer rounded-2xl'>
                        Delete Item
                        <img src="" alt="" />
                    </button>
                    : 
                    // untuk bagian selecting page
                    <button 
                    className='bg-green-600 hover:bg-green-700  min-w-30 px-3 py-3 mt-3 w-2/4 text-nowrap text-white place-self-center shadow-stone-700 shadow-md/20  cursor-pointer rounded-2xl'
                    onClick={()=>{handleAddDelete('add')}}
                    >
                        Add to cart
                    </button>
                }
            </div>
        </div>
    )
}

export default FoodItem