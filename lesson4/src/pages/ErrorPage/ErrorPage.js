import React, { useState, useEffect } from 'react';

const ErrorPage = ({ user }) => {
    const [userInfo, setUserInfo] = useState({ name: '', lastname: '' });

    useEffect(() => {
        if (user) {
            setUserInfo(user);
        }
    }, [user]);

    return (
        <div>
            <h1>Тебе сюда нельзя - {userInfo.name} {userInfo.lastname}</h1>
        </div>
    );
};

export default ErrorPage;
