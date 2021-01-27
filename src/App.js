import React from 'react';
import Home from './Components/Home/Home';
import Filter from './Components/Product/Filter';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
     <Route path = "/" component = { Home } exact />
     <Route path = "/filter" component = { Filter }/> 
     <Route path = "/Contact" component = { Contact }/>
     {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
