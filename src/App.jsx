import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl font-bold text-center my-12'>Course Registration</h1>
      <div className='flex flex-col md:flex-row gap-4'>

        <Home></Home>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App;