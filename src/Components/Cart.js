import React from 'react';
import "./Cart.css"
function Cart({ cartItems , incrementQ , decrementQ ,removeFromCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0);

  return (
    <div className="row my-4">
      <div className="col-md-">
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.image}
                        className='fluid rounded'
                        width={100}
                        height={100}
                        alt="" />
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      <i  onClick={() => incrementQ(item)}
                         style={{cursor:'pointer'}}
                      className="bi bi-caret-up"></i>
                      <span className='mx-2'>
                        {item.quantity}
                      </span>
                      <i 
                       onClick={() => decrementQ(item)}
                         style={{cursor:'pointer'}}
                      className="bi bi-caret-down"></i>
                    </td>
                    <td>
                      ${item.price}
                    </td>
                    <td> $ {item.price * item.quantity}</td>
                    <td><i 
                     onClick={() => removeFromCart(item)}
                         style={{cursor:'pointer'}}
                    className="bi bi-cart-x text-danger"></i></td>

                  </tr>
                ))}
                <tr>
                  <th colSpan={3} className='text-center'>
                    Total
                  </th>
                  <td>
                    <span className='badge bg-danger rounded-pill'>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;

