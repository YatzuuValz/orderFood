import { Route, Routes } from 'react-router'
import './App.css'
import SelectingPage from './Pages/SelectingPage'
import CartPage from './Pages/CartPage'
import OrderPage from './Pages/OrderPage'
import { useState } from 'react'
 
import type { Cart } from './BE/type'

function App() {
  // get from local storage for saving
  const tempCart = JSON.parse(localStorage.getItem('cart')|| "[]")
  const [cart,setCart] = useState<Cart[]>(tempCart)

  return (
    <>
      <SelectingPage cart={cart} setCart={setCart}/>
      {/* <Routes>
        <Route index element={<SelectingPage cart={cart} setCart={setCart}/>} />
        <Route path='Cart' element={<CartPage cart={cart} setCart={setCart}/>}/>
        <Route path='Order' element={<OrderPage/>}/>
      </Routes> */}
    </>
  )
}

export default App
