import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';

import product1 from '../images/1.png';
import product2 from '../images/2.png';
import product3 from '../images/3.png';
import product4 from '../images/4.png';

class Cards extends Component {
    constructor(){
        super();
        this.state = {
            products : [
                {id:1 ,image:product1, name:"product1", price:"235 $"},
                {id:2 ,image:product2, name:"product2", price:"105 $"},
                {id:3 ,image:product3, name:"product3", price:"99 $"},
                {id:4 ,image:product4, name:"product4", price:"346 $"}
            ]
        }
    }
    render() {
        // const {products} = this.state
        return (
            <div className={styles.container}>
                {/* <Card image={product1} name="product1" price="235 $"/>
                <Card image={product2} name="product2" price="105 $"/>
                <Card image={product3} name="product3" price="99 $"/>
                <Card image={product4} name="product4" price="346 $"/> */}
                {this.state.products.map(product => <Card key={product.id} image={product.image} name={product.name} price={product.price}/>)}        
            </div>
        );
    }
}

export default Cards;