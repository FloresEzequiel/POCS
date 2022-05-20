import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <ChildComponent/>
    </div>
  );
}
function ChildComponent(props){
  return <div>
    <h1>{props.data}</h1>
  </div>
}
ChildComponent.prototype={
  data:PropTypes.number.isRequired
}
export default App;
