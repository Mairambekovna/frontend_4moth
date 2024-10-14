import React, { useState, useEffect } from 'react';
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
    const [user, setUser] = useState(null);
    const [isValidUser, setIsValidUser] = useState(false);

    useEffect(() => {
        const name = prompt('Введите ваше имя:');
        const lastname = prompt('Введите вашу фамилию:');
        const enteredUser = { name, lastname };
        setUser(enteredUser);
        if (name === 'John' && lastname === 'Johns') {
            setIsValidUser(true);
        } else {
            setIsValidUser(false);
        }
    }, []);


    return (
        <div>
            {isValidUser ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )}
        </div>
    );
};

export default App;

