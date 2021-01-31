import React,{useState} from 'react';
import products from '../../products'
function Product(){
console.log("products",products[0]);
   const  [priceFilter, setPriceFilter]= useState("asc")
   const filterProducts = products.sort((a,b) =>{
        if(priceFilter == "asc"){
          return a.Price - b.Price;
        }else{
          return b.Price - a.Price;
        }
   })
   const changePriceFilter = (priceFilter)=>{
      if(priceFilter == "asc"){
       setPriceFilter("desc")
      }else{
        setPriceFilter("asc")
      }
   }
    return(
      <div>
        <main>
    <section class="product_main">
      <div class="product">
        <h2><strong>Sale Ends Oct 5 20-30% Off </strong>Sitewide + additional discounts below.</h2><br/>
        <h3> <strong>+ Additional 10% OFF</strong> apply code ( d1 ) at Cart page for orders $150 to $498</h3><br/>
        <h3><strong>+ Additional 20% OFF </strong>apply code ( d2 ) at Cart page for orders above $499+ </h3><br/>
      </div>
      <button onClick={() => changePriceFilter(priceFilter)}>Filter By Price</button>
      <div class="flex-container_product">
        {filterProducts.map((product) =>{ 
          return (
            <div class="flex">
              <img src={product.Image} alt="mother-bebe"/>
              <h3>{product.Description}</h3>
              <p>{product.Price}</p>
              <select>
      <option value="default">All Price</option>
        <option value="low">100$-$400</option>
        <option value="medium">400$-$670</option>
        <option value="high"></option>
        <option >$1,300-$3770</option>
      </select>
              <button type="button" class="btn_flex">Choose!</button>
            </div>
          );
        })}
      </div>
    </section>
  </main>
  <footer class="footer_content">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo"
      class="logoimg2" />
    <div class="first_content">
      <h1>Customer service</h1>
      <p>Contact us</p>
      <p>Legal notices</p>
      <p>General Terms and Conditions</p>
      <p>Customer testimonials</p>
      <p>Offer a Gift Card</p>
      <p>Get $200 off!</p>
      <p>Free art advisory</p>
      <p>Art for Offices</p>
      <p>Art for Interior Designers</p>
      <p>+1 646-844-9541</p>
    </div>
    <div class="first_content">
      <h1>Who are we</h1>
      <p>About us</p>
      <p>Our artists</p>
      <p>Magazine</p>
      <p>The team</p>
      <p>Our selection criteria</p>
      <p>FAQ</p>
    </div>
    <div class="first_content">
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389693.5036551504!2d-80.80836938758921!3d35.08534949726752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a0005405ad75%3A0x2fe1a5af7b25d767!2sPetra&#39;s!5e0!3m2!1sen!2sus!4v1601858601071!5m2!1sen!2sus"
          width="250" height="200" frameborder="0"  allowfullscreen="" aria-hidden="false"
          tabindex="0"></iframe>
      </figure>
    </div>
    <div class="first_content" id="icon_menu2">
      <h3>Follow us</h3>
      <i class="fa fa-facebook"></i>
      <i class="fa fa-instagram">
      </i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-pinterest"></i>
    </div>
  </footer>

      </div>
    );
  }



export default Product;
