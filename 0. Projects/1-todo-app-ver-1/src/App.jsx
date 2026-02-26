import AppTitle from "./components/AppTitle";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import './App.css';

function App() {
  return (
    <center>
      <AppTitle></AppTitle>
      <AddTodo></AddTodo>
      <div className = "item-container">
        <Item1></Item1>
        <Item1></Item1>
      </div>
    </center>
  );
   
}

export default App
