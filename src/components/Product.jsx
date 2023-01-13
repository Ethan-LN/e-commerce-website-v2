import { FavoriteBorderOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'

function Product({item}) {
    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer'
  return (
    <div className='flex flex-1 items-center justify-center min-w-[190px] max-w-[220px] overflow-hidden rounded-md shadow-lg m-2 relative'>
        <img src={item.src} alt='product_image'/>
        <div className='flex items-center justify-center w-[100%] h-[100%] absolute gap-3'>
            <div className={iconStyle}>
                <ShoppingCartOutlined/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlined/>
            </div>
            <div className={iconStyle}>
                <SearchOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product