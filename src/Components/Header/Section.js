import React from 'react';
import Home from './Home/Home';
import Filter from './Product/Filter';
import Contact from './Contact/Contact';
import { Route } from 'react-router-dom';

class Section extends React.Component {
    render() {
        return ( 
        <section className = "closing" >
            <Route path = "/" component = { Home } exact />
            <Route path = "/filter" component = { Filter }/> 
            <Route path = "/Contact" component = { Contact } /> 
            </section>
        );
    }
}

export default Section;