import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';

import product1 from '../images/1.png';
import product2 from '../images/2.png';
import product3 from '../images/3.png';
import product4 from '../images/4.png';

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={product1} name="product1" price="100 $"/>
                <Card image={product2} name="product2" price="200 $"/>
                <Card image={product3} name="product3" price="300 $"/>
                <Card image={product4} name="product4" price="400 $"/>
            </div>
        );
    }
}

export default Cards;