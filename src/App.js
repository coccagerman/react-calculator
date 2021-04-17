import React, { useState } from 'react'
import './App.css'
import Tittle from './components/Tittle'
import DarkModeButton from './components/DarkModeButton'
import Calculator from './components/Calculator'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function switchDarkMode() {
    setDarkMode(!darkMode)
}

  return (
    <div className={darkMode === true ? 'darkModeOn' : 'darkModeOff'}>
      <Tittle darkMode={darkMode}/>
      <DarkModeButton darkMode={darkMode} switchDarkMode={switchDarkMode}/>
      <Calculator />
    </div>
  )
}

export default App
