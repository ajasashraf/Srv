import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold underline text-center text-red-400 ">Hello world!</h1>
      </div> 
    </>
  )
}

export default App
