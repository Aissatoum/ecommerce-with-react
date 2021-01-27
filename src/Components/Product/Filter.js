
import React from 'react';
import './Product.css';
import product from './product.json';
class Filter extends React.Component {
    render() {
        return (
        <div>
          <main>
    <section class="product_main">
      <div class="product">
          <div className="product-adver">
        <h2><strong>Sale Ends Oct 5 20-30% Off </strong>Sitewide + additional discounts below.</h2><br/>
        <h3> <strong>+ Additional 10% OFF</strong> apply code ( d1 ) at Cart page for orders $150 to $498</h3><br/>
      </div>
      <div className="filter">
          <select className="filter-select">
          <option value="">Price.....</option>
          <option value="">$100-$400</option>
          <option value="">$400-$600</option>
          <option value="">$1000-$3,350</option>
          </select>
       
      </div>
      </div>
      <div class="flex-container_product">
        <div class="flex">
        <img src={product.Image} alt="mother-bebe"/>
        <h3>{product.Description}</h3>
        <p>{product.Price}</p>
        </div>
        <div class="flex">
        <img src={product.Image} alt="mother-bebe"/>
        <h3>{product.Description}</h3>
        <p>{product.Price}</p>
        </div>
        <div class="flex">
        <img src={product.Image} alt="mother-bebe"/>
        <h3>{product.Description}</h3>
        <p>{product.Price}</p>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/a1/b2/98/a1b298a112395d707071bd41bf542fc7.jpg" alt="mother-bebe"/>
          <h3>An African Mother and Baby Connecting and Wildlife</h3>
          <p>$200</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://insideafricanart.com/wp-content/uploads/bb-plugin/cache/Kimbo-Big-people-2011-landscape.jpg"
            alt="mother-bebe"/>
          <h3>Village Life and Pleople are Interacting and Selling Vegetable</h3>
          <p>$180</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/originals/dc/44/81/dc448159d2622ea0839b4f358d169550.jpg" alt="mother-bebe"/>
          <h3>Wildlife Animals are eating Drinking and a Beautiful Sunset</h3>
          <p>$300</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHLTr-Hvym7y75UQfS2Qp3JThCYsW9IwhfRg&usqp=CAU"
            alt="mother-bebe"/>
          <h3>Africam Queen wearing Some of The Traditional Clothes</h3>
          <p>$200</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/a2/62/df/a262dfa322a1c206b72f5fdd38e243db.jpg" alt="mother-bebe"/>
          <h3>A women carring a pot full of water,Hard worker</h3>
          <p>$279</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/f3/ac/25/f3ac254d9e8a4ad92ca6e3a1b4438a2c.jpg" alt="mother-bebe"/>
          <h3>A young man wearing a traditional clothe act moderm</h3>
          <p>$130</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/564x/0c/e1/97/0ce197506d705fe34be3661f6eed3400.jpg" alt="mother-bebe"/>
          <h3>Mixe traditional Status Historical Believe and Spinal circle</h3>
          <p>$500</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/e8/38/a7/e838a7332b1810c84ebe7cd9de140a97.jpg" alt="mother-bebe"/>
          <h3>Mixe staus with a protector hand powerful To Protect The Village</h3>
          <p>$520</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/b3/b4/48/b3b4484568ab3998e950a7a5c3270a2d.jpg" alt="mother-bebe"/>
          <h3>A man With a Head of Heart Meaning That You are What you think about.</h3>
          <p>$450</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/6d/2c/3c/6d2c3cdc118c34bd883a4895a93c7389.jpg" alt="mother-bebe"/>
          <h3>Abstrac A man celebrating ling in all shape Happy with a lot vision of Success That he will alway be in
            the front.</h3>
          <p>$600</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/8f/43/fc/8f43fc76e13e29b54bcb3b59088c8863.jpg" alt="mother-bebe"/>
          <h3>Women on line covered and carrying a child,walking</h3>
          <p>$295</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img src="https://i.pinimg.com/474x/7d/f5/62/7df562f60e48769187c7443bcc53b859.jpg" alt="mother-bebe"/>
          <h3>African Woman Carrying Clay Pot on head -two goats Canvas Print / Canvas Art by Loraine Yaffe</h3>
          <p>$195</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img
            src="https://sl-cdn.singulart.com/Q9tSkHcvcDf12DUgg6IsLtU_fuo=/fit-in/300x0/filters:format(webp):quality(65)/artworks/v2/cropped/7037/main/zoom/312285_97df4fb64f9024e66eb3b0558d57090c.jpeg"
            alt="mother-bebe"/>
          <h3>Acrylic on Canvas</h3>
          <p>60x48in $2,950</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img
            src="https://sl-cdn.singulart.com/mfunIyU1tSjB9BuihmiYUv7lPaI=/fit-in/300x0/filters:format(webp):quality(65)/artworks/pictures/cropped/7037/23207/zoom/serie_23207_ea8d81ee997018965eacfdbc547afbdf.jpeg"
            alt="mother-bebe"/>
          <h3>Oil on Wood</h3>
          <p>46x34in, $1,200</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>
        <div class="flex">
          <img
            src="https://sl-cdn.singulart.com/UjtK0NiBay-C90YB9tzf6p2JsFQ=/fit-in/300x0/filters:format(webp):quality(65)/artworks/v2/cropped/7037/main/zoom/799319_c11b273bcf294bba37e37952d975f3a9.jpeg"
            alt="mother-bebe"/>
          <h3>Oil on Canvas</h3>
          <p>43x59in, $3,320</p>
          <button type="button" class="btn_flex">Add To Cart</button>
        </div>

      </div>
    </section>
  </main>  
        </div>
        );
    }

}

export default Filter;