import React, { useState } from 'react';

import './Board.scss';

function Board({title, content, image}){
    

    let [quantity, setQuantity] = useState(0);

    const clickRemoveQuantity = ()=>{
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
        
    }

    const clickAddQuantity= ()=>{
        if(quantity < 10){
            setQuantity(quantity + 1);
        }
    }

    return (
        <article className="board w-48 h-96 rounded-lg overflow-hidden bg-slate-100 ">
            <img src={image}
                alt={title}
                className="w-full h-32 object-cover"/>
            <div className="px-5 py-3 flex flex-col flex-nowrap justify-between items-center 
                    gap-10">
                <div className="flex flex-col flex-nowrap justify-start items-center 
                    divide-y-2  divide-slate-700 gap-4">
                    <h2 className="board__title text-2xl">{title}</h2>
                    <p className="pt-3 text-sm text-center">{content}</p>
                </div>
                <div className="flex flex-col flex-nowrap justify-start items-center gap-2">
                    <h3 className="text-md font-bold">Cantidad</h3>
                    <div className="flex flex-row flex-nowrap justify-center items-center gap-4">
                        <span className="board__button rounded-full w-8 h-8 flex flex-row justify-center
                        items-center bg-black text-white font-bold"
                            onClick={clickRemoveQuantity}>-</span>
                        <span className="">{quantity}</span>
                        <span className="board__button rounded-full w-8 h-8 flex flex-row justify-center
                        items-center bg-black text-white font-bold"
                            onClick={clickAddQuantity}>+</span>
                    </div>
                        
                </div>
            </div>
            
            
        </article>
    )
}

export default Board;