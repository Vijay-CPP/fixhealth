import React from 'react'
import Navbar from './Navbar'
import Advertisement from './Advertisement'

const Home = () => {
  return (
    <div className='bg-hero h-screen bg-center bg-cover sm:bg-fixed'>
      <Navbar/>
      <div className='container mx-auto w-screen h-screen flex items-center'>
        <Advertisement/>
      </div>
    </div>
  )
}

export default Home