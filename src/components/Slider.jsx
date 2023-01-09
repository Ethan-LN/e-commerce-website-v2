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
        <div className='slide'></div>
    {/* rightarrow div */}
    <div className={arrowStyle}>
            <ArrowRightOutlined style={{fontSize: '50px'}}/>
    </div>
    </div>
  )
}

export default Slider