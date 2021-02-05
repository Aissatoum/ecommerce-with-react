import React from 'react'

const Productsecond = (props) => {
    return (
        <div className="single_product">
            <img src={props.product.Image} alt="photo"/>
            <h1>{props.product.Title}</h1>
            <p>{props.product.Description}</p>
            <h3>${props.product.Price}</h3>
            <button className="btn_flex">Add to Cart</button>
        </div>
    )
}

export default Productsecond;
