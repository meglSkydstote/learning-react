import React, { useState } from 'react';

// Standard working with state in react
function CounterExample() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count + 1)}>Increment</h1>
            <h1 onClick={() => setCount(count - 1)}>Decrement</h1>
        </div>
    )
}

export default CounterExample;