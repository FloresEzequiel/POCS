import {useState} from "react";

function Example2(){
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return(
        <>
        <h1>{brand}</h1>
        <p>
            It is a {color} {model} from {year}
        </p>
        </>
    )
}

export default Example2;