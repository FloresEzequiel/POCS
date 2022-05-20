import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import { unmountComponentAtNode, render } from "react-dom";
/* //problem 1
function Parent (){
  return App({a: 1, b:2});
}q

const  App  = (props) => {
  const {a, b}= props;
  return (

    <>
    <p>{'a:'+a}</p>
    <p>{'b:'+b}</p>
    </>

  )
}
//call <Parent/>
*/

/*// problem 2
const Hello = () => <p>Hello World</p>;
const MyComponent = ({myProp}) =>{
const [state] =useState (myProp);
if(state === myProp){
  return null;
}
else{
  return state;
}
};

const App = () =>(
  <div>
    <MyComponent myProp="Hello"/>
    <MyComponent myProp={2}/>
    <MyComponent myProp={{greet: "Hello"}}/>
    <MyComponent myProp={Hello}/>
  </div>
); //call using <App/>
*/

/* // problem 3

class Book extends React.Component{
  constructor(){
    super();
    this.state = {cost : 12000}
  }

  updateCost = (newCost)=>{this.setState({cost : newCost})}

  render(){
    return <React.Fragment>
      <DisplayBook price ={this.state.cost} updateCost= {this.updateCost}/>
    </React.Fragment>
  }
}

class DisplayBook extends React.Component{
  modify =() =>{this.props.updateCost("Twelve Thousand")}
  render(){
    return <React.Fragment>
      Price is {this.props.price} <br/>
      <button onClick={this.modify}>Modify the cost</button>
    </React.Fragment>
  }
}

DisplayBook.propTypes = {price : PropTypes.number}
DisplayBook.defaultProps = { price : 15000}


// execute using <Book/>
*/

/*
//Problem 4
class Test extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
     
    },1000)
  }
  
  render(){
    return(
      <div>
        <h1 >this is the test</h1>
      </div>
    )
  }
}

//<Test/>
*/

/* //problem 5
class ParentComponent extends React.Component{
  render(){
    return <div>
      <ChildComponent/>
    </div>
  }
}

class ChildComponent extends React.Component{
  render(){
    return <div>
      <h1>{this.props.data}</h1>
    </div>
  }
}

ChildComponent.propTypes = {
  data:PropTypes.number.isRequired
}
//ParentComponent
*/

/* // problem 6
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "David",
    };
  }

  changeName = (name) =>{
    this.setState({name : name});
  };

  componentDidUpdate(){
    console.log("App Component | Component Did update");
  }

  render(){
    console.log("App Component | Render")
    return(
      <div>
        <Person name ={this.state.name} changeName = {this.changeName}/>
      </div>
    );
  }
}

class Person extends React.Component{
  componentDidMount(){
    console.log("Person Component | Component Did Mount");
  }
  componentDidUpdate(){
    console.log("Person Component | Component Did update")
  }

  render(){
    console.log("Person Component | Render");
    return(
      <div>
        Hi I am {this.props.name} <br/>
        <button onClick={() =>this.props.changeName("Emily")}>
          Change Name
        </button>
      </div>
    )
  }
}
// <App/>
*/

/* problem 6
class App extends React.Component{

  render(){
    return (
      <div>
        <p class="validation">Please enter Username</p>
        <p className='validation'>Please enter Username</p>
        <p style={{color :'red',fontWeight:'bold'}}>Please enter Username</p>
        
      </div>
    )
  }
}
//<App/>
*/

/*problem 7
function test(){
  let course = 'React'
  return <h1>Welcome to {course}</h1>
}

class Sample extends React.Component{
  render(){
    return (
      <div>
        <h1>{test()}</h1>
      </div>
    )
  }
}
<Sample/>
*/

/*problem 8
class Container extends React.Component{
  handleNameChange(){
    this.setState({name: "Kavya"})
  }

  render(){
    <div>
      <button onClick={()=>this.handleNameChange()}>Change Name</button>
    Welcome {this.state.name}
    </div>
  }
}

<Container/>
*/


ReactDOM.render(
    <Container/>,
  document.getElementById('root')
);
