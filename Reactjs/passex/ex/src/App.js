import logo from './logo.svg';
import './App.css';

import React from 'react';

import ParentComponent from './ParentComponent';

function App(){
  return(
    <div className="App">
      <h1>----------------Methods as props-----------------</h1>
      <ParentComponent/>
    </div>
  );
}
export default App;
