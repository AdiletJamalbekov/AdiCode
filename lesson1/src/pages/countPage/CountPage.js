import React, {useState} from 'react';
import Button from "../../components/button/Button";

const CountPage = () => {

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <Button title={'decrement'} action={decrement}/>
            <Button title={'increment'} action={increment}/>
        </div>
    );
};

export default CountPage;