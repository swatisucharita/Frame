import React from 'react';
import './MicroFrontend';
import './App.css';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_PRODUCTS_HOST: productsHost,
  REACT_APP_OFFERS_HOST: offersHost
} = process.env;

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <h3>Welcome To The Store</h3>
      <div id="offers-container">
        <MicroFrontend name="offers" host={offersHost}></MicroFrontend>
      </div>
      <div id="products-container">
        <MicroFrontend name="products" host={productsHost}></MicroFrontend>
      </div>
    </div>
  );
}

export default App;
