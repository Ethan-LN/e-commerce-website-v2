import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';

function Home() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home;