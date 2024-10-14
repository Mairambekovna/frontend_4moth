import React, { useState, useEffect } from 'react';

const MainPage = ({ user }) => {
    const [userInfo, setUserInfo] = useState({ name: '', lastname: '' });
    useEffect(() => {
        if (user) {
            setUserInfo(user);
        }
    }, [user]);

    return (
        <div>
            <h1>Добро пожаловать {userInfo.name} {userInfo.lastname}, мы тебя ждали!</h1>
        </div>
    );
};

export default MainPage;
