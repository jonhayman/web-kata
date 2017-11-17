import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props){
        super(props);
       // this.removeProduct = this.removeProduct.bind(this);
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={e => this.props.removeProduct(this.props.product.name)}>x</div>
            </div>
        </div>
    }

}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product product={p} key={'product-' + i } removeProduct={this.props.removeAction}/>
            )}
        </div>
    }
}

export default Products