import React from 'react';
import Description from "../../components/Description/Description";
import styles from './AboutPage.module.css';

const AboutPage = () => {
    const data = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.about}>
            <h1>About Page</h1>
            <Description info={data} />
        </div>
    );
};

export default AboutPage;
