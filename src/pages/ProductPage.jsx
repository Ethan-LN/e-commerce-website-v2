import React from 'react'
import Announce from '../components/Announce'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

function ProductPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='mb-10 sm:flex justify-center'>
            <div className='flex flex-1 items-center justify-center m-10 '>
                <img src= "https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779" 
                    alt='product_image'
                    className='w-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in-out duration-300'/> 
            </div>  
            <div className='flex-[1.3] flex justify-start flex-col mt-10'>
                <h1 className='title text-[20px] '>White Crew Neck Sweat Shirt</h1>
                <p className='p-1 mt-4'>Thisdfusdf dfdiud Suer kiodfdo fdgdlfjd dfdlfseref  dfodfis dfte fidht dfodfd! cvgfg trtfvf dkifd jdfs fkdsdfdf kioosidfs llldood fdkjd 
                Thisdfusdf dfdiud Suer kiodfdo fdgdlfjd dfdlfseref  dfodfis dfte fidht dfodfd! cvgfg trtfvf dkifd jdfs fkdsdfdf kioosidfs llldood fdkjd</p>
                <p className='mt-7 text-xl'>Price: <b>$70 AUD</b></p>
                {/*color variants  */}
                <div className='flex text-xl gap-2 mt-7'>
                    Colors
                    <div className='bg-black w-[2rem] h-[2rem] rounded-full border-2 cursor-pointer'></div>
                    <div className='bg-gray-400 w-[2rem] h-[2rem] border-2 rounded-full cursor-pointer'></div>
                    <div className='bg-white w-[2rem] h-[2rem] border-2 rounded-full cursor-pointer'></div>
                </div>
                <div className='mt-7 text-xl '>
                    Size
                    <select className='ml-7 border-2 rounded-md'>
                        <option selected disabled>Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
                <div className='mt-7'>
                <Counter/> 
                </div>
                <button className='btn w-[180px] mt-7'>Add to cart</button>      
            </div>     
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductPage