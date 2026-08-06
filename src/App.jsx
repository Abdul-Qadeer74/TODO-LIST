import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'


const App =() => {


  return (
    <div className='h-screen w-full bg-[#2b3439]  p-2 flex justify-evenly items-center flex-col'>
    <Navbar/>
    <Main/>
    </div>
  )
}

export default App