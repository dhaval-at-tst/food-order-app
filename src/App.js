import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartVisible, setIsCartVisible] = useState();

  const openCartHandler = () => {
    setIsCartVisible(true)
  }

  const closeCartHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <CartProvider>
      {isCartVisible && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
