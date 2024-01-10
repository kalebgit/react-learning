import { useRef, useState } from "react"
import ResultModal from "./ResultModal"


export default function TimeChallenge({title, targetTime}){



    // we have to use refs because each time the button is pressed its triggered a new re-render
    // so the variable timer is re-assigned 
    const timer = useRef()
    const dialog = useRef()

    //using timeout
    // const [timerStarted, setTimerStarted] = useState(false)
    // const [timerExpired, setTimeExpired] = useState(false)

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000)
    }

    function handleStart(){
        // setTimerStarted(true)
        //you must target the current memeber
        //using setTimeout
        // timer.current = setTimeout(()=>{
        //     setTimeExpired(true)
        //     dialog.current.open()
        //     setTimerStarted(false)
        // }, targetTime * 1000)

        timer.current = setInterval(()=>{
            setTimeRemaining((prevTimeRemaining)=>{
                return prevTimeRemaining - 10;
            })
        }, 10)
    }

    function handleStop(){
        //using 
        // clearTimeout(timer.current)
        dialog.current.open()
        clearInterval(timer.current)
        // setTimerStarted(false)
    }

    

    return (<>
        <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining}
            onReset={handleReset}/>
        <section className="challenge">
            <h2 className="">{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop Challenge" : "Start Challenge"}
                </button>
            </p>
            <p className={` ${timerIsActive ? "active" : ""}`}>
                {timerIsActive ? "Time is running" : "Timer inactive"}
            </p>
        </section>
    </>
    )
}