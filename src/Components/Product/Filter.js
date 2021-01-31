import React,{useState} from 'react';
import Footer from '../Footer/Footer'
import './Product.css';
// import product from 'json!../product.json';
 import {Data} from './data';
 import Products from './Products';
import Filterapp from './Filterapp';


class Filter extends React.Component{
constructor(){
    super();
    // CREATE a localstorage for data and sort
    this.state = {
        products:localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):Data,
        sort:localStorage.getItem('sort')?JSON.parse(localStorage.getItem('sort')):'',
        cat:''
    }
}
//sorting
sorting = (e)=>{   
const sorting = e.target.value;
const sortRes = this.state.products.sort((a,b)=>{
    if(sorting === 'all'){
        return a.id>b.id?1:-1
    }
    if(sorting === 'low'){
        return a.Price>b.Price?1:-1
    }
    
    if(sorting === 'high'){
        return a.Price<b.Price?1:-1
    }
})
this.setState({
    sort:sorting,
    products:sortRes
},()=>{
   localStorage.setItem('sort',JSON.stringify(this.state.sort));
   localStorage.setItem('data',JSON.stringify(this.state.products))
})

}
//filtering by price
filteringName = (e)=>{
    let categ = e.target.value;
    if(categ===''){
        this.setState({
            cat:categ,
            products:Data
        })
    }
    else{
        this.setState({
            cat:categ,
            products:Data.filter(product=>{
                console.log(product.Category);
                return product.Category === e.target.value
                
            })
        })
    }
}
render(){
    return(
      <div >
          <Filterapp 
          sorting={this.sorting}
          sorts={this.state.sort}
          filteringName={this.filteringName}
          cat={this.state.cat}
          />
          <Products products={this.state.products}/>
       <div>
       </div>
  <Footer />

      </div>
    );
  }
}


export default Filter;
