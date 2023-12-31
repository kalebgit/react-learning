import Tokyo from './../public/img/tokyo.jpg'
import TextContainer from './components/TextContainer/TextContainer'
import Item from './components/Item/Item'
import {useState} from 'react'
import './App.scss'

function App() {
  
 

  const trip = {
    id: 101, 
    title: "Tokyo", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque sequi amet dolorem quod quas asperiores eligendi praesentium accusantium inventore.",
    price: 2999.99,
    img: Tokyo, 

  }


  return (
    <>
      <Item {...trip}/>
      <TextContainer container='h1' className="text-4xl p-3 bg-red-400">hola mi nombre es emiliano</TextContainer>
    </>
  )
}

export default App
