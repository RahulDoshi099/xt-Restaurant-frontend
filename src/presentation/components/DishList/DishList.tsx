import React from "react";
import { useNavigate } from "react-router-dom";
import "./DishList.css";

const dishes = [
  { id: 1, name: "Dish 1", price: 10 },
  { id: 2, name: "Dish 2", price: 15 },
  { id: 3, name: "Dish 3", price: 20 },
];

interface DishListProps {
  addToCart: (dish: { id: number; name: string; price: number }) => void;
}

const DishList: React.FC<DishListProps> = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="dish-list">
      <h2>Our Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <div className="dish-box" key={dish.id}>
            <li >
              {dish.name} - ${dish.price}
              <button onClick={() => addToCart(dish)}>+</button>
            </li>
          </div>
        ))}
      </ul>
      <button className="view-more" onClick={() => navigate("/menu")}>
        View More
      </button>
    </div>
  );
};

export default DishList;
