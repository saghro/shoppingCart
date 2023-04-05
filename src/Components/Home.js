import React from 'react';
import ProductList from './ProductList';
function Home({products ,addToCart}){
  return (

    <ProductList products={products} addToCart={addToCart}/>


  );
}

export default Home;
