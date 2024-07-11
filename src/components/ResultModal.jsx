import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, handleOnclose}, ref) {
    const dialog = useRef();

    const isUserLost = remainingTime <= 0;
    const formattedTimeRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round(( remainingTime/(targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return (
        <dialog className="result-modal" ref={dialog}>
            {isUserLost && <h2>You Lost</h2>}
            {!isUserLost && <h2>Score {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedTimeRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={handleOnclose}>
                <button >Close</button>
            </form>
        </dialog>
        );
});

export default ResultModal;