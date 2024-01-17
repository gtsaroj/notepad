import { useState } from 'react'


import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
<div><HomePage/></div>
  )
}

export default App
