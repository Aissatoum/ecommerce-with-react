import React from 'react';
import './Header.css'


//import Section from './components/Section';
//import Product from './Product';
//import Contact from './Contact';

class Logo extends React.Component{
  render(){
  return (
    <div className="logo">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo" style={{width: "10%", height: "10%", margin: "20px 7px"}}/>
    </div>
  );
}
}

export default Logo;
