import { useState } from "react";
//use one state and include an object

function Car2(){
    const [car, setCar] = useState({
        brand : "Ford",
        model : "Mustang",
        year : "1990",
        color : "red"
    });


//update component color to blue

const updateColor = () =>{
    setCar(previousState =>{
        return {...previousState, color: "blue"}
    })
}

    return (
        <>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}
        </p>

        <button type="button" onClick={updateColor}>Blue</button>
        </>
    )
}

export default Car2;