import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom'
const ResultModal = forwardRef(({targetTime, timeRemaining, onReset}, ref)=>{

    const youLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2)

    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)

    const privateDialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                privateDialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog className="result-modal text-black" ref={privateDialog}>
        <h2>You {youLost ? "lost" : "win"}!</h2>
        {!youLost && <h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form method="dialog">
            <button 
            // onClick={onReset} 
            //on close is better because its not implemented when pressin Esc
            onClose={onReset}>Close</button>
        </form>
    </dialog>, document.querySelector("#modal"))
})

export default ResultModal