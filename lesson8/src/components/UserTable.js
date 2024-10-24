import React, { useEffect, useState } from 'react';

const UserTable = ({ onDelete }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleDelete = (id) => {
        onDelete(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)} style={{ color: 'red' }}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="4">Список пуст</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default UserTable;
