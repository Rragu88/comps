import {useEffect, useState} from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    const handleIncrementClick = () => {
        setCount(count + 1);

    }

    const handleDecrementClick = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log(`Count is ${count}`);
    }, [count]);

    return {
        count,
        handleIncrementClick,
        handleDecrementClick
    }
}

export default useCounter;