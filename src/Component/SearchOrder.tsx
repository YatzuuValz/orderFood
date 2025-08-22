import React, { useEffect, useState } from 'react'

type Props={
    setPencarian:React.Dispatch<React.SetStateAction<string>>
}
function SearchOrder({setPencarian}:Props) {
    const [search,setSearch] = useState('')
    
    // function handleOnKeyDown(event:KeyboardEvent){
    //     console.log('runing')
    //     if(event.key === 'Enter'){
    //         setPencarian(search)
    //     }
    // }
    // useEffect(()=>{
    //     console.log('run')
    //     document.addEventListener('keydown',handleOnKeyDown)
    //     return document.removeEventListener('keydown',handleOnKeyDown)
    // },[])

    return (
        <div className='flex bg-neutral-700 p-3 h-14'>
                <input type="text" placeholder='Search' value={search} onChange={(event)=>setSearch(event.target.value)}
                    className='rounded-lg border border-white border-solid bg-white px-3 w-8/10 sm:w-1/2  h-full' />
                {/* <img src="" alt="" /> */}
        </div>
    )
}

export default SearchOrder