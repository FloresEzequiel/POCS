import {useState} from "react";

function Example5(){
    const [name, setName]=useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Enter your name: 
                <br/>
                <input type="text" value={name}
                onChange={(e) =>setName(e.target.value)}></input>
            </label>
            <input type="submit"/>
        </form>
    )
}

export default Example5;