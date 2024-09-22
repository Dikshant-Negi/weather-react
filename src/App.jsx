import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './component/Data'
import { Input } from './component/Input'
import './component/style.css'
function App() {
  const [input, setInput] = useState("")
  return <>
  <h1 >WEATHER APP</h1>
  <div className='container'>
      <Input setInput={setInput}></Input>
      <Data input={input}></Data>
  </div>
  </>
}

export default App
