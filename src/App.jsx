import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="flex items-center justify-between p-6 bg-gray-100">
        <div>
        <h1 className="text-2xl font-bold text-center">Grow with Nadine</h1>
        </div>
        <nav className='justify-evenly space-x-8'>
          <a>About us</a>
          <a>Products</a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact</button>
        </nav>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">Get affordable hair products with no hassles</h1>
        <h2 className="text-lg text-center">Making people feel better one product at a time</h2>
      </div>
    </>
  )
}

export default App
