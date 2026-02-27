import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  let items = ['Protein Powder', ' Whey Protein', 'Casein Protein', 'Branched-Chain Amino Acids (BCAAs)', 'Creatine Monohydrate']
  // let items = []
  return (
    <div>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems = {items}></ErrorMessage>
      <FoodItems foodItems = {items}></FoodItems>
    </div>
  );
}
export default App
