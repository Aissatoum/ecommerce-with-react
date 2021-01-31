import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Footer from '../Footer/Footer';
import './Home.css'

class Home extends React.Component{
    render(){
    return (
        <div className="Home">
        <div className="hero">
            <ImageSlider slides={SliderData} />
            <div className="banner-title_move">
            <div className="banner-title">
              <h1>African<span> Art and Finger Print Gallery of African</span> come and discover more.</h1>
              <button type="button" className="btn"><span>EXPLORE</span></button>
          </div>    
          </div>
          </div>
      <main>
      <section className="art-work">
      <h2>Buy Original Art Online at our Art Gallery</h2>
          <h2>Our current favorites</h2>
          <div className="col-vertical_med">
      <article className="feat-paints">
          <h2>Discover Africa through these  original paintings.</h2>
          <button type="button" className="btn">DISCOVER</button>
         </article>
      </div>
      <section>
          <h2>New Collection Made Just for you</h2>
          <div className="row">
              <div className="column"> 
                  <img src="https://i.pinimg.com/236x/29/b7/37/29b737bb256fa89406b5b39ecd3d365e.jpg" alt="painting slide"/>
              </div>
              <div className="column">
                <img src="https://i.pinimg.com/474x/b8/46/a9/b846a9333258a08755d812ebd4a6d597.jpg" alt="Snow"/>
              </div>
              <div className="column">
                <img src="https://i.pinimg.com/474x/eb/5b/2b/eb5b2ba78e81dd0c609cdd96e2a47231.jpg" alt="Forest"/>
              </div>
              <div className="column">
                <img src="https://i.pinimg.com/474x/8d/be/6b/8dbe6bed6a7b57fbd9588570e22b0c1c.jpg" alt="Mountains"/>
              </div>
              <div className="column">
                  <img src="https://i.pinimg.com/474x/a8/63/18/a863189d9a9bcce43825e7f09acba41e.jpg" alt="Mountains"/>
                </div>
                <div className="column">
                  <img src="https://i.pinimg.com/474x/13/21/a8/1321a815e63a99eb11f6c25957565db8.jpg" alt="Mountains"/>
                </div>
            </div>
      </section>
      <section className="choice">
          <h2>Our latest collections of original artworks & paintings</h2>
          <div className="collection">
              <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo" className="logoimg"/>
          <p>Charity Action for Doctors of the World</p>
              </div>
          <span>
              <img src="https://i.pinimg.com/474x/f5/85/c2/f585c241a5b29593683e8b6de0426a6c.jpg" alt="women"/>
              <img src="https://i.pinimg.com/236x/cb/1c/05/cb1c056008e0b7485a99c6bcda606763.jpg" alt="village"/>
              <img src="https://i.pinimg.com/474x/ba/bf/7e/babf7ef988d3b1ee9889f22e2d93711d.jpg" alt="tree"/>
              <img src="https://i.pinimg.com/474x/fc/de/e2/fcdee25f0c2bae155722c4ce434000fa.jpg" alt="color"/>
              <img src="https://i.pinimg.com/474x/4c/c7/a0/4cc7a0a473cbdfb22683c970fdafe0bc.jpg" alt="mom"/>
          </span>
          </div>
          <aside>
          <div className="collection_side">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo" className="logoimg"/>
              <p>Our best abstract paintings</p>
              <span>
                  <img src="https://i.pinimg.com/474x/84/d3/af/84d3afe26e079d50e67ba383c7f07162.jpg" alt="multi"/>
                  <img src="https://i.pinimg.com/474x/50/c1/49/50c149ea491b7601fb9245fc97a723b3.jpg" alt="face"/>
                  <img src="https://i.pinimg.com/474x/e9/0e/44/e90e4435498a2fa477149d0f60886128.jpg" alt="africa"/>
                  <img src="https://i.pinimg.com/474x/ff/b1/cd/ffb1cdff386dea2595f6a1548eebe167.jpg" alt="mask"/>
                  <img src="https://i.pinimg.com/474x/0c/b7/e0/0cb7e0a4ea06c3ec55ca9058e6fe8eb5.jpg" alt="seat"/>
              </span>
              </div>
              </aside>
      </section>
      <section className="flex-views">
          <div className="flex-v">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo" className="logoimg"/>
          <h2>Excellent</h2>
          <p>Based on 1666 reviews</p>
          <img src="https://coloradobath.com/wp-content/uploads/2019/07/5-stars.jpg" alt="star2" className="etoil"/>
          </div>
          <div className="flex-v">
              <img src="https://i.pinimg.com/474x/0b/1d/1c/0b1d1c1b49eb917ac23ef9bf27180a18.jpg" alt="new pic"/>
          </div>
           <div className="flex-v">
              <img src="https://coloradobath.com/wp-content/uploads/2019/07/5-stars.jpg" alt="star2" className="etoil"/>
                  <h2>February</h2>
                  <p>The work arrived yesterday, in perfect condition - It is magnificent. I was very happy with the product and the service. You have been really helpful throughout the process. The next time I have an empty wall at home, I'll be sure to visit <em> Gallery of Afican Art.</em>.</p>
              
          </div>
      </section>
      <section className="flex-title">
          <h2>The artists, collectors love right now</h2>
          <div className="flex-view_part">
          <div className="flex_art">
               <img src="https://bucket.mg.co.za/wp-media/2016/07/f7018101-ayanda-mabulu-defends-zuma-gupta-painting-we-must-expose-the-naked-truth-image-696x392.jpg" alt="artist name"/>
               <p>Ayanda Mabulu</p>
              </div>
              <div className="flex_art">
                  <img src="https://i0.wp.com/awesomebyte.com/wp-content/uploads/2019/06/nelsonmakamo_black_pride_awesomebyte_image_10.jpg?fit=1200%2C628&ssl=1" alt="artist name"/>
                  <p>Nelson Makamo</p>
                 </div>
                   <div className="flex_art">
                  <img src="https://i0.wp.com/www.culturetype.com/wp-content/uploads/2019/02/Michael-Armitage-portrait.jpg?resize=1306%2C868&ssl=1" alt="artist name"/>
                  <p>Leia Michael </p>
                 </div>
                 <div className="flex_art">
                  <img src="https://www.stilllifegallery.net/wp-content/uploads/2012/12/Ephrem-Kouakou-Artist.jpg" alt="artist name"/>
                  <p>Ephrem Kouakou</p>
                 </div>
                 <div className="flex_art">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-R-AhpkTpjCDu8e8XFbm08aDrVmXEMnCvA&usqp=CAU" alt="artist name"/>
                  <p>Aïda Muluneh</p>
                 </div>
          </div>
      </section>
      <section className="ways">
          <h2>Ways Of Payment</h2>
              <span className="flex-view_part">
                  <img src="https://usa.visa.com/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg" alt="money"/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRekBCjGat03h5ac7TGS3P0IdjY8bTy-gzeoQ&usqp=CAU" alt="money"/>
                  <img src="https://cdn0.iconfinder.com/data/icons/IS_credit-cards-full_final/512/american_express.png" alt="money"/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpv8QxRQ1ZrSc5T_dmCcE_NWN7DSeWUlw9xA&usqp=CAU" alt="money"/>
                  <img src="https://www.pngrepo.com/download/176436/alipay-pay-card.png" alt="money"/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnSQqZsaMtTJkWt1nCcrJKadeXfpIrD-sj4Q&usqp=CAU" alt="money"/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS98Buxm6zppsix2Zf8eQ-Jn6eiWSzZEhxfug&usqp=CAU" alt="money"/>
              </span>
              <h4>Your online art gallery: buy artworks on Singulart</h4>
              <p>Buying art made easy: African art is an online gallery for contemporary art that allows collectors and art lovers alike to buy works of art in complete security from nationally recognized artists. From abstract canvases, figurative paintings, drawings or even street art and graffiti, we offer an international selection of work in a variety of styles and techniques. African Art and Gallery is also helping emerging artists from around the globe to sell their works to art lovers.</p>
              <h4>African art, an online art gallery that brings contemporary artworks to everyone</h4>
              <p>African Art Gallerry believes that the digital world is an incredible tool for buying art, spreading art around the world and allowing people to purchase pieces that they love, whether it is by an emerging African artist or a more established contemporary French painter or even a rising star of street art.</p>
      </section>
      </section>
      </main>
      
      
     <Footer />
     
     </div>
    );
  }
}
        export default Home;