import React, { useState } from 'react';
import { Dish } from '../../data/models/Dish';

interface OrderPopupProps {
  dishes: Dish[];
  onClose: () => void;
}

const OrderPopup: React.FC<OrderPopupProps> = ({ dishes, onClose }) => {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleDishSelection = (dish: Dish) => {
    setSelectedDishes([...selectedDishes, dish]);
    setTotalPrice(totalPrice + dish.price);
  };

  const handleSubmit = async () => {
    // await createOrder(order);
    onClose();
  };

  return (
    <div className="order-popup">
      <h2>Select Dishes</h2>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id} onClick={() => handleDishSelection(dish)}>
            {dish.name} - ${dish.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={handleSubmit}>Submit Order</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default OrderPopup;
