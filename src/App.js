import logo from './logo.svg';
import './App.css';
import React  from 'react';
import CartItem from './CartItem';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
        <CartItem />
        <Cart/>
    </div>
  );
}

export default App;
