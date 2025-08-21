export type Food = {
    name: string;
    price: number;
    Img: string;
    desc:string
}

export type Cart = 
    Food & {
        quantity: number
    }
