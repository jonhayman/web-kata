import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { GetData } from './data';
import { Product } from '../Models/Product';

interface AppState {
    products: Product[];
    newProductName: string;
    newProductDescription: string;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { products: GetData(), newProductName: '', newProductDescription: '' }; 
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({newProductName: event.currentTarget.value});
  }

  handleDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({newProductDescription: event.currentTarget.value});
  }

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    var newProduct = {name: this.state.newProductName, description: this.state.newProductDescription};
    this.setState({newProductName: '', newProductDescription: ''});
    this.setState((prevState: AppState, props: AppProps) => ({products: [...prevState.products, newProduct]}));
    event.preventDefault();
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name: 
            <input type='text' name='name' value={this.state.newProductName} onChange={this.handleNameChange} />
          </label>
          <label>Description: 
            <input 
              type='text'
              name='description' 
              value={this.state.newProductDescription} 
              onChange={this.handleDescriptionChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>        
        </div>
        <div className='products-container'>
          <ProductList products={this.state.products} />
        </div>
      </div>);
  }
}

export default App;