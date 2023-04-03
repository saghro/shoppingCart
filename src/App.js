import React, { useState } from 'react'
import Header from './Components/Header'
import ProductList from './Components/ProductList';
import Swal from 'sweetalert2';

function App() {
  const[products,setProducts]=useState([
     {
      id:1,
      name:'Apple iPhone XS',
      price:251,
      image:'https://tse2.mm.bing.net/th?id=OIP.bCpIZW6NjYsiUPvVbfMkUwHaHa&pid=Api&P=0'
     },
     {
      id:2,
      name:'Apple iPhone 12 Pro',
      price:559,
      image:'https://tse3.mm.bing.net/th?id=OIP.IHynKh-JiNQQcJmknQjyGAHaHa&pid=Api&P=0'
     },
     {
      id:3,
      name:'Apple iPhone X',
      price:238,
      image:'https://tse4.mm.bing.net/th?id=OIP.Yexv651vJH_QSGvSAa5ndAHaHa&pid=Api&P=0'
     },
     {
      id:4,
      name:'Apple iPhone 12 Pro Max',
      price:667,
      image:'https://tse3.mm.bing.net/th?id=OIP.IHynKh-JiNQQcJmknQjyGAHaHa&pid=Api&P=0'
     },
     {
      id:5,
      name:'Apple iPhone 11',
      price:359,
      image:'https://tse2.mm.bing.net/th?id=OIP.rdcYuV1EKBG6BASF6_s4TAHaIw&pid=Api&P=0'
     },
     {
      id:6,
      name:'Apple iPhone 8 Plus',
      price:207,
      image:'https://tse3.mm.bing.net/th?id=OIP.cYbq022pzYzDqJ8MqptgyQHaIt&pid=Api&P=0'
     },  
  ]);
  const [cartItems,setCartItems]= useState([]);

   const addToCart =(item)=>{
    let productItem = cartItems.find(product =>product.id===item.id);
     if(productItem){
      productItem.quantity +=1;
      setCartItems([...cartItems])
      Swal.fire({
          position:'top-end',
          icon:'success',
          title:'Your item has been updated',
          showConfirmButton:false,
          time:1500

      });
     }else{
      item.quantity =1;
      setCartItems([item,...cartItems])
      Swal.fire({
        position:'top-end',
        icon:'success',
        title:'Your item has been saved',
        showConfirmButton:false,
        time:1500

    });

     }
   }
  return (
     <div className='container'>

      <Header/>
      <ProductList products={products} addToCart={addToCart}/>

     </div>
     
  );
}

export default App;
