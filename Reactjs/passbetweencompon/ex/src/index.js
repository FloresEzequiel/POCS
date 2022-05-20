import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Passex1 from './Passex1';
import Passex2 from './Passex2';
import Passex3 from './Passex3';

//Parent component
class Parent extends React.Component{
  render(){
    return(
      <div>
        <h2>You are inside Parent Component</h2>
        <Child name ="User" userId = "5555"/>

      </div>
    );
  }
}

//Child component
class Child extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h3>You are inside child component</h3>
        <h3>Your user id is: {this.props.userId}</h3>
      </div>
    )
  }
}



//pass <Parent/>
//Passex1 
//Passex2


ReactDOM.render(
  
    <Passex3/>
 ,
  document.getElementById('root')
);


