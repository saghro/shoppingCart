import React, { useState } from 'react';
import Header from './Components/Header';
import Swal from 'sweetalert2';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apple iPhone XS',
      price: 251,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.bCpIZW6NjYsiUPvVbfMkUwHaHa&pid=Api&P=0'
    },
    {
      id: 2,
      name: 'Apple iPhone 12 Pro',
      price: 559,
      image:
        'https://tse3.mm.bing.net/th?id=OIP.IHynKh-JiNQQcJmknQjyGAHaHa&pid=Api&P=0'
    },
    {
      id: 3,
      name: 'Apple iPhone X',
      price: 238,
      image:
        'https://tse4.mm.bing.net/th?id=OIP.Yexv651vJH_QSGvSAa5ndAHaHa&pid=Api&P=0'
    },
    {
      id: 4,
      name: 'Apple iPhone 12 Pro Max',
      price: 667,
      image:
        'https://tse3.mm.bing.net/th?id=OIP.IHynKh-JiNQQcJmknQjyGAHaHa&pid=Api&P=0'
    },
    {
      id: 5,
      name: 'Apple iPhone 11',
      price: 359,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.rdcYuV1EKBG6BASF6_s4TAHaIw&pid=Api&P=0'
    },
    {
      id: 6,
      name: 'Apple iPhone 8 Plus',
      price: 207,
      image:
        'https://tse3.mm.bing.net/th?id=OIP.cYbq022pzYzDqJ8MqptgyQHaIt&pid=Api&P=0'
    }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    let productItem = cartItems.find(product => product.id === item.id);
    if (productItem) {
      let updatedItems = cartItems.map(product =>
        product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
      );
      setCartItems(updatedItems);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([newItem, ...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been saved!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className='container'>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Home products={products} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
