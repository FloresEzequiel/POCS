import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link, renderMatches} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path ='/contact' element ={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
