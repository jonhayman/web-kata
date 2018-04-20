import * as React from 'react';
import { Component } from 'react';
import { ProductListProps } from './ProductListProps';
import { ProductItemProps } from './ProductItemProps';
import { Product } from './Models/Product';

class ProductItem extends Component<ProductItemProps, {}> {
  static getStyle(p: Product): string {
    var style = '';
    if (p.free) {
      style += 'free ';
    }
    if (p.new) {
      style += 'new';
    }
    return style;
  }

  render(): JSX.Element {
    const product = this.props.product;
    return (<li className={ProductItem.getStyle(product)}><b>{product.name}</b> {product.description}</li>);
  }
}

class ProductList extends Component<ProductListProps, {}> {
  render(): JSX.Element {
    const productItemList = this.props.products.map((product) => <ProductItem key={product.name} product={product} />);
    return (<ul>{productItemList}</ul>);
  }
} 


export { ProductList };