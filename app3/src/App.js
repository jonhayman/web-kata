import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class FilterForm extends Component {
  constructor(props){
    super(props);

    this.state = {filterString: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const val = event.target.value;
    this.setState({filterString:val});
    this.props.filterProducts(val);
  }


  render(){
    return (
      <form> 
       <label>Product name: 
          <input name="productName" value={this.state.filterString} onChange={this.handleChange} />
       </label> 
      </form>
    )
  }
}


class App extends Component {

  constructor(props){
    super(props)
    this.state= {products: data.products}

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  filterProducts(productString){
    console.log(productString);
    const products = this.state.products;

    const filteredProducts = data.products.filter(product => product.name.includes(productString));
    this.setState({products: filteredProducts});
    console.log(filteredProducts.length);
  }

  handleAddProduct(event){
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value
    })

    this.setState({products: products})
  }

  removeProduct(product){
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>
      <FilterForm filterProducts={this.filterProducts}/>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
