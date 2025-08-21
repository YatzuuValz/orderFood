import foods from '../BE/Foods'

import FoodItem from './FoodItem'
import type { Cart } from '../BE/type'







type Prop = {
    isCart: boolean
    cart: Cart[]
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
    search: string
}

function FoodSection({ isCart, cart, setCart, search }: Prop) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {/* kalau cart return section cart kalau bukan return section non cart */}
            {isCart ?

                //item fifilter dulu baru di map
                cart.map((item, index) => {
                    return <FoodItem key={index} isCart={isCart} food={item} cart={cart} setCart={setCart}></FoodItem>
                })
                :
                foods.filter((item) => {
                    if (search) return item.name.toLowerCase().includes(search.toLowerCase())
                    return true
                }).map((item, index) => {
                    return <FoodItem key={index} isCart={isCart} food={item} cart={cart} setCart={setCart}></FoodItem>
                })}
        </div>
    )
}

export default FoodSection