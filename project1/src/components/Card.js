import React, { Component } from 'react';
import styles from './Card.module.css';

import up from "../images/up.svg";
import down from "../images/down.svg";


class Card extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    UpCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    DownCount = () => {
       if(this.state.count > 0) {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
       }
    }
    
    render() {
        const {image, name, price} = this.props;
        const {count} = this.state
        return (
            <div className={styles.container}>
                <img src={image} alt="cloths"/>
                <h3>{name}</h3>
                <h4>{price} {count ? `* ${count} = ${count * Number(price.split(' ')[0])} $ `:  ''  }</h4>

                <div className={styles.counter}>
                    <img  src={up} alt='icon' onClick={this.UpCount}/>
                    <span>{count}</span>
                    <img className={this.state.count ? '' : styles.deactive} src={down} alt='icon' onClick={this.DownCount} />
                </div>
            </div>

            
        );
    }
}

export default Card;