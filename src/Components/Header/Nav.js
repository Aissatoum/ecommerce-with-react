import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Nav extends React.Component{
  state = {
    toggle: false
  }
  menuToggle = () =>{
    this.setState({toggle: !this.state.toggle})
  }
  render(){
    const {toggle} = this.state;
  return (
    <>
        <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/filter">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="closex" onClick={this.menuToggle}>X</li>
          </ul>
          <div className="menux" onClick={this.menuToggle}>Menu</div>
    </>
  );
}
}

export default Nav;
