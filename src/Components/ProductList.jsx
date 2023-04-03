import React from 'react'
import ProdListItem from './ProdListItem';
 function ProductList({products,addToCart}) {
  return (
    <div className='row my-4'>
          {
           products.map(product => <ProdListItem key={product.id}
             product={product} addToCart={addToCart} />)
          }
    </div>
  )
}
export default ProductList;