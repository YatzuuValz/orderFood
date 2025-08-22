import React, { useCallback, useEffect, useState } from 'react'

type Props={
    setPencarian:React.Dispatch<React.SetStateAction<string>>
}
function SearchOrder({setPencarian}:Props) {
    const [search,setSearch] = useState('')
    
    const handleOnKeyDown= useCallback((event:KeyboardEvent)=>{
        console.log('runing')
        if(event.key === 'Enter'){
            setPencarian(search)
        }
    },[search,setPencarian])
    useEffect(()=>{
        document.addEventListener('keydown',handleOnKeyDown)
        return ()=> document.removeEventListener('keydown',handleOnKeyDown)
    },[handleOnKeyDown])

    return (
        <div className='flex bg-neutral-700 p-3 h-14'>
                <input type="text" placeholder='Search' value={search} onChange={(event)=>setSearch(event.target.value)}
                    className='rounded-l-lg border border-white border-solid bg-white px-3 lg:w-4/10 w-1/2  h-full' />
                <img src="search.png" alt="" className='bg-white p-2 rounded-r-lg cursor-pointer' onClick={()=>setPencarian(search)} />
        </div>
    )
}

export default SearchOrder