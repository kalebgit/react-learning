import {useState} from 'react'



export default function Player({name, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false)
    const [player, setPlayer] = useState({name: name, symbol: symbol})
    const onChangeEdit = (e)=>{
        e.stopPropagation()
        setIsEditing((prevState)=>{
            return !prevState
        })
    }
    const onChangeName = (e)=>{
        setPlayer((prevState)=>{
            return {...prevState, name: e.target.value}
        })
    }
    const onChangeSymbol = ({target: {value}})=>{
        setPlayer((prevState)=>{
            return {...prevState, symbol: value}
        })
    }

    const playerBox = isEditing ? 
        <>
            <input id="player-name" type="text" value={player.name} onChange={onChangeName}/>
            {/* <select id="symbol" onChange={onChangeSymbol}>
                <option>X</option>
                <option>O</option>
            </select> */}
            <span className="player-symbol">{player.symbol}</span>
        </> : 
        <>
            <span className="player-name">{player.name}</span>
            <span className="player-symbol">{player.symbol}</span>
        </>
        

    return (
        
        <li className={isActive ? 'active' : undefined}>
            <span className="player">        
                {playerBox}
            </span>
            <button onClick={onChangeEdit}>{
                isEditing ? "SAVE": "EDIT"
            }</button>
        </li>

            
            
    )
}