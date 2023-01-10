import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'

function Slider() {
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer';
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
    {/* leftarrow div */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined style={{fontSize: '50px'}}/>
        </div>
    {/* slide div */}
        <div className='wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[#006171]'>
          <div className='slide flex items-center justify-center h-[100%]'>
            <div className='forImage flex flex-1 justify-center items-center h-[100%] object-cover'>
              <img 
                src ='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='slide__image'
              />
            </div>
            <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
              <h2 className='text-[55px] text-white'>Hey this is an awsome deal today</h2>
                <p className='text-[30px] text-white'>Upto 30% off</p>
                <button className='btn'>Shop Now</button>
            </div>
          </div>
        </div>
    {/* rightarrow div */}
    <div className={arrowStyle}>
            <ArrowRightOutlined style={{fontSize: '50px'}}/>
    </div>
    </div>
  )
}

export default Slider