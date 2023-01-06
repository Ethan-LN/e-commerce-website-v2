import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Announce() {
    const[annouceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
    const handleClose = () => {
        setAnnounceStyle(annouceStyle + " hidden")
    }
  return (
    <div className={annouceStyle}>
        <h2>Hurry up, it's 30% off now</h2>
        <CloseIcon className='cursor-pointer' onClick= {handleClose} />
    </div>
  )
}

export default Announce;