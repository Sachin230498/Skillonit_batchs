import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext'

const FoodCard = ({food}) => {
 
  const { addtoCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      <img
        style={{
          width: "300px",
          height: "300px",
        }}
        src={food.image}
        alt=""
      />
      <h3>{food.name}</h3>
      <p>{food.price}</p>
      <button onClick={() => addtoCart(food)}>Add to Cart</button>
    </div>
  );
}

export default FoodCard
