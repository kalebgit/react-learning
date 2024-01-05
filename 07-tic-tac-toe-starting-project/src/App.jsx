
import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import Log from './components/Log/Log'

import {useState} from 'react'


const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
]

const initialGameBoard = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
]


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0]. player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [hasWinner, setHasWinner] = useState(false)
  // const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = deriveActivePlayer(gameTurns);


  let gameBoard = initialGameBoard;

    for(const turn of gameTurns){
        const {square: {row, col}, player} = turn
        gameBoard[row][col] = player
    }

    let winner = null

    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

      if(firstSquareSymbol && secondSquareSymbol && thirdSquareSymbol && firstSquareSymbol === secondSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol
      }
    }

  function handleSelectSquare(rowIndex, colIndex){
  //   setActivePlayer((curActivePlayer)=>{
  //     return curActivePlayer === 'X' ? "O" : "X"
  //   })
  
    setGameTurns((prevTurns)=>{
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns]
      return updatedTurns
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player name="Player 2" symbol="Y" isActive={activePlayer === 'O'}/>
          </ol>
          {winner && <p>You won!</p>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
