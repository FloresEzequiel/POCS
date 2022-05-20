import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const App=()=>{
  const [change, setChange] = useState(true);
  return(
    <div>
      <button onClick={()=>setChange(!change)}>Click Here</button>
      {change ? <h1>Welcome to the Jungle</h1> :
      <h1>Welcome to the world</h1>}
    </div>
  )
}
export default App;
