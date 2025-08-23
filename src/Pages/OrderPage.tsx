import type { Cart } from "../BE/type"
import Header from "../Component/Header"
import { NavLink } from "react-router"

type Props = {
    cart:Cart[]
    setCart:React.Dispatch<React.SetStateAction<Cart[]>>
}

function OrderPage({cart,setCart}:Props) {
    const total = cart.reduce((acc,item)=> {
                    return acc + (item.price * item.quantity)},0)
    const tax = Math.floor(total * 0.01)
    return (
    <>
        <title>Order</title>
        <div className='fixed top-0 left-0 right-0'>
            <Header />
            <div className='h-px bg-black'></div>
            <div className='flex justify-center bg-neutral-700 p-3 h-14 gap-10'>
                <NavLink to={'/'} className='flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 rounded-2xl w-1/3 shadow-stone-700 shadow-lg/40 cursor-pointer'>
                    <button className="text-white">
                        Add More
                    </button>
                </NavLink>
                <NavLink to={'/Cart'} className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-1/2 shadow-stone-700 shadow-lg/40 cursor-pointer'>
                    <button className="text-white">
                        Back to Cart
                    </button>
                </NavLink>
            </div>
        </div>
        <div className="h-screen flex items-center">
            <div className="flex h-6/10 w-screen items-center justify-around mt-20">
                <div className="border-2 border-black h-full w-4/10 overflow-y-scroll">
                    {/* <p className="relative -top-3">Shooping Cart</p> */}
                    <div className="w-full flex border-b-2">
                                <p className="py-1 pl-5 w-5/10 ">Name</p>
                                <p className="py-1 w-1/10 ">Q</p>
                                <p className="py-1 w-25/100">Harga</p>
                                <p className="py-1 w-25/100">Total</p>
                            </div>
                    {cart.map((item,index)=>{
                        return (
                            <div key={index} className="w-full flex border-b-2">
                                <p className="py-5 pl-5 w-5/10 ">{item.name}</p>
                                <p className="py-5 w-1/10 ">{item.quantity}x</p>
                                <p className="py-5 w-25/100">Rp. {item.price.toLocaleString()}</p>
                                <p className="py-5 w-25/100">Rp. {(item.price*item.quantity).toLocaleString()}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col border-2 border-black h-7/10 w-4/10 self-start p-5">
                    <p>SubTotal: {total}</p>
                    <p>Tax: {tax} </p>
                    <p>Total: {total+tax}</p>
                    
                    <button className="w-8/10 mt-auto rounded-lg bg-indigo-500 hover:bg-indigo-600 py-2 self-center text-white shadow-stone-700 shadow-lg/30">Place Order</button>
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default OrderPage