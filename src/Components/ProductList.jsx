import React from 'react'
import ProdListItem from './ProdListItem';
 function ProductList({products}) {
  return (
    <div className='row my-4'>
          {
           products.map(product => <ProdListItem key={product.id}
             product={product} />)
          }
    </div>
  )
}
export default ProductList;