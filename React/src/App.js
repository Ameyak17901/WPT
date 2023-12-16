// import logo from './logo.svg';
import './App.css';
import Greetings from './Greeting';
import Welcome from './Welcome'
import Maths from './Maths'
import Total from './Total';
import IDcard from './IDcard';

function App() {
  let arr = [10, 20, 30, 40, 50]
  let ob = { name: "Ameya", age: 22, "date of birth": "17-09-2001" }
  return (
    <div className="App">
      <Welcome></Welcome>
      <Greetings></Greetings>
      <Maths num1={30} num2={20} op={"-"} />
      <Total arr={arr}></Total>
      <IDcard obj1={ob}></IDcard>
    </div>
  );
}

export default App;
