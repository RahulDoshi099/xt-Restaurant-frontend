// src/components/CartSidebar/CartSidebar.tsx
import React from "react";
import "./CartSidebar.css";

interface CartSidebarProps {
  cart: any[]; // Adjust type as per your cart item structure
  removeFromCart: (id: number) => void;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  cart,
  removeFromCart,
  setCartVisible,
}) => {
  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item,index) => (
            <div className="list-box" key={index}>
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            </div>
          ))}
        </ul>
      )}
      <button onClick={() => setCartVisible(false)}>Close</button>
    </div>
  );
};

export default CartSidebar;
