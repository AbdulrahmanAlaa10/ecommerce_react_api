


import React from 'react';
import Prodcut from './Prodcut';

const Products = ({ products }) => {

  return (

        <main style={{marginTop:"100px", height:"200px", width:"100%"}}>
        {products.map((product) => (
            <div key={product.id} >
                {/* <Product product={product} onAddToCart={onAddToCart} /> */}
                <Prodcut product={product} onAddToCart={onAddToCart} />

            </div>
        ))}
        </main>
  );
};

export default Products;