
import React, {useState} from 'react';
const FunctionalComponent = () =>{
    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count+1)
    }

    return <div style={{marign:'50px'}}>
        <h1>Welcome to the rooster</h1>
        <h3>Counter App using functional Component: </h3>
        <h2>{count}</h2>
        <button onClick={increase}>Add</button>
    </div>

}

export default FunctionalComponent;