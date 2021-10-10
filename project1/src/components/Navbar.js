import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <ul className={styles.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/">Category</Link></li>
                </ul>
            </div>
            
            <div className={styles.right}>
                <h1>HOSSEIN</h1>
            </div>
            
        </header>
    );
};

export default Navbar;