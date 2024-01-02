


const initialGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square: {row, col}, player} = turn
        gameBoard[row][col] = player
    }
    //using statew for the game board
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard
    //     });

    //     onSelectSquare()
    // }

    return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
            </ol>
        </li>)}
    </ol>
    )
}