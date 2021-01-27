import React from 'react';
 import './Product.css';
 //import Footer from '../..Footer/Footer';
 //import items from './Products.json';


class Products extends React.Component {
    render() {
        return (
//             <div>
//             <div className="advertisement">
//             <h2><strong>Sale Ends Oct 5 20-30% Off</strong>Sitewide + additional discounts below.</h2><br/>
// <h3> <strong>+ Additional 10% OFF</strong> apply code ( d1 ) at Cart page for orders $150 to $498</h3><br/>
// <h3><strong>+ Additional 20% OFF </strong>apply code ( d2 ) at Cart page for orders above $499+ </h3><br/>
//             </div>
            <React.Fragment>
                     <div className="product">
                        
                        {/* <img className="product-img" alt="Makeup" 
                            src={this.props.item.Image} />
                        <h2 className="title">{this.props.item.Title}</h2>
                        <p className=="price">{this.props.item.Price}</p>
                        <p>{this.props.item.Description}</p>
                    </div> */}
                    <main>
             <section className="product_main">

           <div className="flex-container_product">

            <div className="flex">
                <img src={this.props.item.Image} alt=""/>
            <h1 className="title">{this.props.item.Title}</h1>
            <p className="price">{this.props.item.Price}</p>
            <p>{this.props.item.Description}</p>
            <button className="btn_flex">Add to Cart</button>
             </div>
             </div>
    </section>
    </main>
    </div>



            </React.Fragment>
            
        )
    }
}

export default Products;