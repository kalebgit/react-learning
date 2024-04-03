import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Texto({variable}){
  return <div>{variable}</div>
}

function App() {
  return <>
    <Texto variable="hola"></Texto>
  </>
}

export default App
