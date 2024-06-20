// src/pages/Home/HomePage.tsx
import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CartSidebar from '../../components/CartSidebar/CartSidebar';
import DishList from '../../components/DishList/DishList';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [iscartVisible, setCartVisible] = useState<boolean>(false);
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (dish: { id: number; name: string; price: number }) => {
    setCart([...cart, dish]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="home-page">
      <button
        onClick={() => {
          setCartVisible(true);
        }}
      >
        Cart
      </button>
      <main>
        <Banner />
        <div className="content">
          {iscartVisible && (
            <CartSidebar
              cart={cart}
              removeFromCart={removeFromCart}
              setCartVisible={setCartVisible}
            />
          )}
          <DishList addToCart={addToCart} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
