import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1>HOSSEIN</h1>
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                    <li>Products</li>
                    <li>Category</li>
                    <li>Home</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;