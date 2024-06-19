import React, { useState } from 'react';
import DishList from '../../components/dishes/DishList';
import OrderPopup from '../../components/orders/OrderPopup';
import { Dish } from '../../data/models/Dish';

const HomePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>([]);

  // const handleOrderClick = (dishes: Dish[]) => {
  //   setDishes(dishes);
  //   setShowPopup(true);
  // };

  return (
    <div>
      <h1>Restaurant</h1>
      <DishList />
      {showPopup && <OrderPopup dishes={dishes} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default HomePage;
