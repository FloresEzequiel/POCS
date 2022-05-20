import {useState} from 'react';

function Example4(){
    const [name, setName] = useState("");

    console.log(name)
    return (
        <form>
            <label>Enter your name: 
                <input
                type="text"
                value={name}
                onChange={(e) =>setName(e.target.value)}
                ></input>
            </label>
        </form>
    )
}
export default Example4;