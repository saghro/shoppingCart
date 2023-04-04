import React from 'react';

function ProdListItem({ product, addToCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            <i className="bi bi-cart-check"></i> Add to Cart 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdListItem;