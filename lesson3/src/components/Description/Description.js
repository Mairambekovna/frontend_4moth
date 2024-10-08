import React from 'react';
import styles from './Description.module.css';

const Description = ({ info }) => {
    return (
        <div className={styles.description}>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
        </div>
    );
};

export default Description;
