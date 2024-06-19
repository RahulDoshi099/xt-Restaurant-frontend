import React, { useEffect, useState } from "react";
import { Dish } from "../../data/models/Dish";

const DishList: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      //   const fetchedDishes = await getAllDishes();
      const fetchedDishes = [{
        id: 1,
        name:"abbah",
        price:6666
      }] as any;
      setDishes(fetchedDishes);
    };

    fetchDishes();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.name} - ${dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
