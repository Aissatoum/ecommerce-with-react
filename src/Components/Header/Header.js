import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.css'
class Header extends React.Component{
    render(){
    return (
        <header>
       <Logo />
          <Nav />
        </header>
        )
        }
        }
export default Header;