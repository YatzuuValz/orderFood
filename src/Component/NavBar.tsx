
function NavBar() {
  return (
    <nav className='flex items-center justify-center bg-neutral-700 h-15 overflow-x-scroll divide-x divide-black shadow-md/30 shadow-black border-t border-black'>
        <button className="cursor-pointer min-w-30 h-full text-white" >All</button> 
        <button className="cursor-pointer min-w-30 h-full text-white" >Beef</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Ayam</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Sup</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Snack</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Drink</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Special</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Paket</button> 
        <button className="cursor-pointer min-w-30 h-full text-white">Promo</button> 
      </nav>
  )
}
export default NavBar