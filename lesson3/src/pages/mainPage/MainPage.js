import React from 'react';
import Description from "../../components/Description/Description";
import styles from './MainPage.module.css';

const MainPage = () => {
    const data = { title: "Title", description: "description" };

    return (
        <div className={styles.main}>
            <h1>Main Page</h1>
            <Description info={data} />
        </div>
    );
};

export default MainPage;
