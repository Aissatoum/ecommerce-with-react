import React from 'react';
import './Product.css';
import items from './data';
import Products from './Product.js';
import Footer from '../Footer/Footer';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }


    render() {
        const { type, cost } = this.state;
        return (
            <React.Fragment>

                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="Most Popular">Most Popular</option>
                            <option value="Best Selling">Best Selling</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$100 - $400</option>
                            <option value="medium">$400 - $600</option>
                            <option value="high">$1,000 - $3,335</option>
                        </select>
                    </div>
                </div>

                <section id="African-Art" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (type === 'default' && cost === 'default') {
                                return <Products item={item} />
                            } else if (type === item.type && cost === item.cost) {
                                return <Products item={item} />
                            } else if (type === item.type || cost === item.cost) {
                                return <Products item={item} />
                            }
                        })}
                    </div>
                </section>
                <Footer/>
            </React.Fragment>
           
        );
    }
}


export default Filter;