//example single hook that contains an object

import { useState } from "react";
function Example3(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateYear = () =>{
        setCar(previousState =>{
            return {...previousState, year:"1932"}
        })
    }
    return (
        <>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}
        </p>
        <button type="button" onClick={updateYear}>Change Year</button>
        </>
    )
}
export default Example3;