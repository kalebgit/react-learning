import {useState, useRef} from 'react'

export default function Player() {
  const input = useRef();
  

  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange({target:{value}}){
  //   setPlayerName(value);
  // }  

  function handleClick(){
    // setSubmitted(true)
    setPlayerName(input.current.value);
    input.curernt.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unkown entity"} </h2>
      <p>
        <input 
          ref={input} 
          type="text" 
          // onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
