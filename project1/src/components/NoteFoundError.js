import React, { Component } from 'react';
import styles from "./NoteFoundError.module.css";

class NoteFoundError extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>404</h1>
                <h3>Error: page not found!</h3>
            </div>
        );
    }
}

export default NoteFoundError;