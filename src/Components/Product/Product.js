import React from 'react';


class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="card-Art">
                        <img className="Art-img" alt="African Art"
                            src={this.props.item.Image} />
                        <h2 className="title">{this.props.item.Title}</h2>
                        <p className="price">{this.props.item.Price}</p>
                        <p>{this.props.item.Description}</p>
                        <button className="btn_flex">Add To Card</button>
                    </div>
            </React.Fragment >
            
        )
    }
}

export default Products;