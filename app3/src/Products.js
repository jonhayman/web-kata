import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props){
        super(props);

        this.state = {showDescription: false};

        this.toggleDescription = this.toggleDescription.bind(this);
    }

    toggleDescription(){
        console.log("Toggling description");
        this.setState({showDescription: !this.state.showDescription})
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}
                <span onClick={this.toggleDescription}>{this.state.showDescription?'-':'+'}</span>
                </div>
                {this.state.showDescription && <div className='desc'>{this.props.product.description}</div>}
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-' + i }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products