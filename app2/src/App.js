import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: data.products, productname: "", description: "" };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    //We don't need to use the state values of description or productname'
    this.setState({products: this.state.products.concat({name: event.target["productname"].value, description: event.target["description"].value})});

    event.preventDefault();
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="productname">Product name</label>
      <input name="productname" id="productname" type="text" onChange={this.handleInputChange} value={this.state.productname}></input>
      <label htmlFor="description">Description</label>
      <input name="description" id="description" type="text" onChange={this.handleInputChange} value={this.state.description}/>
      <input type="submit"/>
      </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} />
      </div>
    </div>
  }
}

export default App
