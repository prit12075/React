import Item from './Items';

const FoodItems = ({ foodItems }) => {

    return (
        <ul class="list-group">
            {foodItems.map((item) => 
            <Item key={item} foodItem={item}></Item>)}
        </ul>
    );
};

export default FoodItems;
 