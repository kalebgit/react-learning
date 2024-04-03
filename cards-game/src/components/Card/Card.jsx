import Fire from '../../assets/images/fire.webp';
import Water from '../../assets/images/snow.webp';
import Snow from '../../assets/images/water.webp';

import './Card.scss';

function Card({type, power, image, color}){
    return (
        <article className="card relative rounded-lg flex flex-col flex-nowrap justify-start items-start
                    overflow-hidden"  
                style={{backgroundColor: color, borderColor: color}}>
                
            <div className="pb-5 pr-8 pl-1 rounded-br-full absolute top-0 left-0 border-1 flex flex-col justify-start 
                    items-center gap-7 z-2" style={{backgroundColor: color, borderColor: color}}>
                <img src={type == 1 ? Fire : type == 2 ? Water : Snow}
                    alt={type}
                    className="object-contain h-24"/>
                <span className="text-8xl text-black ">{power}</span>
            </div>


            <img src={image}
                alt={"card of " + (type == 1 ? "fire" : type == 2 ? "water" : "snow") +", " +
                        "power: " + power }
                className="box object-contain z-1"/>    
            
        </article>
    )
}

export default Card;