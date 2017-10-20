import React, { Component } from 'react'
import './App.css'
import data from './data.js'


function Product(props){
  return <li>{props.product.name} {props.product.free ? "Free!" : "Not free"} </li>;
}

class App extends Component {

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <p className="App-intro">
        Some text
      </p>

      <div className='products'>
        <ul>
        {data.products.map(product => <Product key={product.name} product={product}/>)}
        </ul>
      </div>
    </div>
  }
}

export default App;
