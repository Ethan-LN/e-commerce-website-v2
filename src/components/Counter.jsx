import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
    const handleReduce = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } 
    }
    const handleIncrease = () => {
        if (counter > 0) {
            setCounter(counter + 1);
        } 
    }
  return (
    <div className='flex text-xl '>
        Quantity
        <div className='ml-5 shadow-md flex'>
            <div className='bg-[#8a4af3] text-white flex items-center justify-center w-8 rounded-l-md '>-</div>
            <div className='border-[1px] w-8 flex items-center justify-center border-[#8a4af3]'>1</div>
            <div className='bg-[#8a4af3] text-white flex items-center justify-center w-8 rounded-r-md'>+</div>
        </div>
    </div>
  )
}

export default Counter