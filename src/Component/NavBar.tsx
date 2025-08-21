import { useState } from "react"

function NavBar() {
    const catergories = ['All', 'Beef', 'Ayam', 'Kambing', 'Cemilan', 'Minuman', 'Promo', 'Paket']
    const [category, setCategory] = useState('All')
    return (
        <nav className='flex items-center justify-center bg-neutral-700  h-15 overflow-x-scroll divide-x divide-black shadow-md/30 shadow-black border-t border-black'>
            {catergories.map((item) => {
                const bg = category === item && "bg-emerald-500"
                return (
                        <button
                            className={`cursor-pointer min-w-30 h-full ${bg} text-white`}
                            onClick={() => setCategory(item)}
                        >{item}
                        </button>
                    )
                })}
        </nav>
    )
}
export default NavBar