import {useState} from 'react';

function FavoriteColor2(){
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>My favorite color is {color}</h1>
        <button 
        type='button'
        onClick={ () => setColor("blue")}>Blue</button>
        </>
    )
}

export default FavoriteColor2;