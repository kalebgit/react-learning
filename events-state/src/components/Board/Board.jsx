import React, { useState } from 'react';

import './Board.scss';

function Board({title, content}){
    
    const [stateTitle, setTitle] = useState(title);

    //si se cambia directo en la funcion si cambia porque cambia la prop antes de llegar
    //a lo que retorna el componente o funcion
    // title = "modificado"
    const clickHandler = ()=>{

        //no deben ser llamado dentro de funciones declaradas
        //useState();
        setTitle("Updated!!")
        
        //no se refelejan los cambios en el componente pero sí se ejecuta la función
        console.log(title);
    }

    return (
        <article className="board px-5 py-10 w-96 h-96 rounded-lg bg-slate-100 flex 
            flex-col flex-nowrap justify-between items-center gap-3">
            <div className="flex flex-col flex-nowrap gap-4">
                <h2 className="board__title text-3xl">{stateTitle}</h2>
                <p className="text-md">{content}</p>
            </div>

            <button className="py-2 px-4 rounded-full bg-blue-700 text-white"
                onClick={clickHandler}>Modificar Texto</button>
        </article>
    )
}

export default Board;