import Content from './pages/game/Content/Content';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Card from './components/Card/Card';
import CartSurfer from './assets/images/cart-surfer.webp';
import Landing from './assets/images/landing-pad.webp';
import GamePad from './assets/images/game.webp';
import './App.scss';



function App() {
  // let cartas;
  
  // const retrieveData = async function(){
  //   const response = await fetch("./assets/data/cards.json");
  //   return response.json();
  // };

  // retrieveData()
  //   .then((data)=>{
  //     cartas = data;
  //     console.log(cartas);
  //   })
  //   .catch((err)=>{
  //     console.log("hubo un error en la recuperacion de informacion de las cartas: \n" + err);
  //   })

  let cards = [
    {
        key: 1,
        type: 1,
        power: 3,
        image: CartSurfer,
        color: "#1148A1"
    },
    {
        key: 2,
        type: 1,
        power: 4,
        image: Landing,
        color: "#A399CA"
    },
    {
        key: 3,
        type: 1,
        power: 8,
        image: GamePad,
        color: "#61B946"
    },
    // {
    //     key: 4,
    //     type: 3,
    //     power: 3,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/7/72/HIKING_IN_THE_FOREST_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123220536",
    //     color: "#F7952B"
    // },
    // {
    //     key: 5,
    //     type: 3,
    //     power: 4,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/c/c1/SKI_HILL_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123224012",
    //     color: "#E23C26"
    // },
    // {
    //     key: 6,
    //     type: 3,
    //     power: 8,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/1/13/SNOW_FORTS_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123224013",
    //     color: "#FBEB2D"
    // },
    // {
    //     key: 7,
    //     type: 2,
    //     power: 3,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/7/77/BEACH_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123224014",
    //     color: "#1148A1"
    // },
    // {
    //     key: 8,
    //     type: 2,
    //     power: 4,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/5/52/EMERALD_PRINCESS_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123224015",
    //     color: "#A399CA"
    // },
    // {
    //     key: 9,
    //     type: 2,
    //     power: 8,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/e/e8/MANHOLE_COVER_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123224059",
    //     color: "#61B946"
    // },
    // {
    //     key: 10,
    //     type: 1,
    //     power: 5,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/0/06/CASE_OF_THE_MISSING_COINS_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150123234952",
    //     color: "#F7952B"
    // },
    // {
    //     key: 11,
    //     type: 1,
    //     power: 6,
    //     image: "https://static.wikia.nocookie.net/clubpenguin/images/d/d9/GRAY_FISH_card_image.png/revision/latest/scale-to-width-down/1000?cb=20150124012242",
    //     color: "#E23C26"
    // }
]

  return (
    <>
      <Content>
        <CardsContainer>
          {cards.map((element)=><Card {...element}/>)}
        </CardsContainer>
      </Content>
    </>
  )
}

export default App
