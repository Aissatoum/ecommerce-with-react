import React, { useState } from 'react';
import products from '../.. / products '

function Product() {
    console.log("products", products[0]);
    const [priceFilter, setPriceFilter] = useState("asc") /
        const filterProducts = products.sort((a, b) => {
                if (priceFilter == "asc") {
                    return a.Price - b.Price;
                } else {
                    return b.Price - a.Price;
                }
            }) /
            const changePriceFilter = (priceFilter) => {
                if (priceFilter == "asc") {
                    setPriceFilter("desc")
                } else {
                    setPriceFilter("asc")
                }
            }
    return ( 
    <div>
        <main>
        <section class = "product_main">
             <div class="product">
         <h2><strong>Sale Ends Oct 5 20-30% Off <strong>Sitewide + additional discounts below.</h2><br/>
                <h3> <strong>+ Additional 10% OFF</strong> apply code ( d1 ) at Cart page for orders $150 to $498</h3><br/>
               <h3><strong>+ Additional 20% OFF </strong>apply code ( d2 ) at Cart page for orders above $499+ </h3><br/>
             </div>
             <button onClick={() => changePriceFilter(priceFilter)}>Filter By Price</button> }
             <div class="flex-container_product">
                {filterProducts.map((product) =>{ 
                   return (
                       <div >
                   <div className="flex">
                       <img src={product.Image} alt="mother-bebe"/>
                       <h3>{product.Description}</h3>
                       <p>{product.Price}</p>
                      <select>
               <option value="default">All Price<option>
            <option value="low">100$-$400</option>
               <option value="medium">400$-$670</option>
                <option value="high"></option>
                 <option >$1,300-$3770</option>
              </select>
        </option>            
          <button type="button" class="btn_flex">Choose!</button>
                 </div>
                   );
             })}
               </div>
             </section>
           </main>
           
        </div>
    );
}



export default Produc;