import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Shop></Shop>
    </div>
  )
}

export default App
