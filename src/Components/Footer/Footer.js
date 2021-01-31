import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (  
        <footer className="footer_content">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/18/02/73/gallery-of-african-art.jpg" alt="logo" className="logoimg2"/>
        <div className="first_content">
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
     <div className="first_content">
            <h1>Who are we</h1>
            <p>About us</p>
            <p>Our artists</p>
            <p>Magazine</p>
            <p>The team</p>
            <p>Our selection criteria</p>
            <p>FAQ</p>
    </div>
        <div className="first_content">
            <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389693.5036551504!2d-80.80836938758921!3d35.08534949726752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a0005405ad75%3A0x2fe1a5af7b25d767!2sPetra&#39;s!5e0!3m2!1sen!2sus!4v1601858601071!5m2!1sen!2sus" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </figure>
        </div>
        <div className="first_content" id="icon_menu2">
            <h3>Follow us</h3>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram">
                </i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
        </div>
    </footer>
      )}