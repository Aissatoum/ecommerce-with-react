import React from 'react'
import Productsecond from './Productsecond';
const Products = (props) => {
    return (
        <div className="products">
            {props.products.map(product=>(
                <Productsecond key={Productsecond.id} product={product} />
            ))}
            
        </div>
    )
}

export default Products
