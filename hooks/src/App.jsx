import Content from './components/Content/Content';
import Board from './components/Board/Board';
import SushiRolls from './assets/images/rolls.webp';
import Pizza from './assets/images/pizza.jpg';
import './App.scss'

function App() {
  
  const food = [
    {
      title: "Rollos",
      content: "Deliciosos rollos con rico aguacate y surimi recién cocinado",
      image: SushiRolls
    },
    {
      title: "Pizza",
      content: "Pizza con pepperoni, carne molida una salsa especial de la casa",
      image: Pizza
    },
  ]

  return (
    <>
      <Content>
        {food.map((element)=><Board {...element}></Board>)}
        {/* <Board {...food[0]}></Board> */}
      </Content>
    </>
  )
}

export default App