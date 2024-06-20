import { useState } from "react";
import "./Menu.css";

const dishes = [
  {
    group: "Vegetable Sabji",
    items: [
      { index: 1, image: "dish1.jpg", name: "Spaghetti Carbonara", price: "$12.99" },
      { index: 2, image: "dish2.jpg", name: "Margherita Pizza", price: "$10.99" },
      { index: 3, image: "dish3.jpg", name: "Caesar Salad", price: "$8.99" },
    ],
  },
  {
    group: "Starters",
    items: [
      { index: 4, image: "dish4.jpg", name: "Grilled sandwich", price: "$15.99" },
      { index: 5, image: "dish5.jpg", name: "Paneer Tikka", price: "$19.99" },
      { index: 6, image: "dish6.jpg", name: "Paneer Kaju", price: "$21.99" },
    ],
  },
  {
    group: "Naan",
    items: [
      { index: 7, image: "dish7.jpg", name: "Aloo Naan", price: "$9.99" },
      { index: 8, image: "dish8.jpg", name: "Butter Naan", price: "$7.99" },
    ],
  },
  {
    group: "Cold Drinks",
    items: [
      { index: 9, image: "dish9.jpg", name: "Coke", price: "$13.99" },
      { index: 10, image: "dish10.jpg", name: "Pepsi", price: "$11.99" },
    ],
  },
];


const Menu = () => {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const toggleGroup = (group: any) => {
    if (expandedGroup === group) {
      setExpandedGroup(null);
    } else {
      setExpandedGroup(group);
    }
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      {dishes.map((group) => (
        <div key={group.group} className="group-container">
          <h2 className="group-name" onClick={() => toggleGroup(group.group)}>
            {group.group} <span className="expand-icon">{expandedGroup === group.group ? "-" : "+"}</span>
          </h2>
          {expandedGroup === group.group && (
            <div className="dish-list">
              {group.items.map((dish) => (
                <div key={dish.index} className="dish-item">
                  <img src={`/images/${dish.image}`} alt={dish.name} className="dish-image" />
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-price">{dish.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;