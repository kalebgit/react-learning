import Button from '../Button/Button'
import {useState} from 'react'



export default function Item({id, title, description, price, img}){
    const [counter, setCounter] = useState(1) 
    // let is_10 = counter >=10;
    const onBuy = ()=>{
        setCounter((prevState)=>{
        return ++prevState;
        })
    }
    return (
        <>
            <article className="flex flex-col flex-nowrap justify-start items-start bg-gray-100 w-64 overflow-hidden
            rounded-md relative">
            <img src={img} className=""/>

            <div className="p-2">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="">{price}</p>
            <Button text="Comprar" blue onClick={onBuy}/>
            </div>
            
        </article>
        <p>Contador: {counter}</p>
        </>
    )
}