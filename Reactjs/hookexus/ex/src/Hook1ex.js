import React, { useState } from 'react';
function Hook1ex (){
    const [click, setClick] = useState(0);

    /*
        using array destructuring here
        to asign initial value 0
        to click and a reference to the function
        that updates click to setClick
    */

        return (
            <div>
                <p>You clicked {click} times</p>

                <button onClick={() => setClick(click +1)}>
                    Click me
                </button>
            </div>
        );
}

export default Hook1ex;