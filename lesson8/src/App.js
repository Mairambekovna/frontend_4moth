import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateUserForm from './components/CreateUserForm';
import UserTable from './components/UserTable';
import './App.css';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateUser = (userData) => {
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(() => {
                openModal('Пользователь успешно создан');
            })
            .catch(error => console.error('Error:', error));
    };

    const handleDeleteUser = (userId) => {
        fetch(`http://localhost:8000/users/${userId}`, {
            method: 'DELETE',
        })
            .then(() => {
                openModal('Пользователь удален');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <CreateUserForm onSubmit={handleCreateUser} />
            <UserTable onDelete={handleDeleteUser} />

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <h2>{modalMessage}</h2>
                <button onClick={closeModal} className="modal-close-button">Close</button>
            </Modal>
        </div>
    );
};

export default App;
