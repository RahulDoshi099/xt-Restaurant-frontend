// src/components/DishList/DishList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './DishList.css';
import { addItem } from '../../../state/slices/cartSlice';

const dishes = [
  { id: 1, name: 'Dish 1', price: 10 },
  { id: 2, name: 'Dish 2', price: 15 },
  { id: 3, name: 'Dish 3', price: 20 },
  { id: 4, name: 'Dish 4', price: 25 },
  { id: 5, name: 'Dish 5', price: 30 },
];

const DishList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (dish: { id: number; name: string; price: number }) => {
    dispatch(addItem({ ...dish, quantity: 1 }));
  };

  return (
    <div className="dish-list">
      <h2>Our Dishes</h2>
      <ul>
        {dishes.slice(0, 3).map((dish) => (
          <div className="dish-box" key={dish.id}>
            <li>
              {dish.name} - ${dish.price}
              <button onClick={() => handleAddToCart(dish)}>+</button>
            </li>
          </div>
        ))}
      </ul>
      <button className="view-more" onClick={() => navigate('/menu')}>
        View More
      </button>
    </div>
  );
};

export default DishList;
