import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimmerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetOnClose() {
        setTimeRemaining(targetTime*1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            console.log(timeRemaining);
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        // setTimeRemaining(targetTime*1000);
        dialog.current.open();
        // resetOnClose();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} handleOnclose={resetOnClose}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "stop" : "start" } challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running....' : 'Inactive timmer' }
                </p>
            </section>
        </>
    )
}