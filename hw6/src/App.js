import React from 'react';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import './components/UserForm/UserForm.css';
function App() {
    return (
        <div className="App">
            <h1>Управление пользователями</h1>
            <UserForm />
        </div>
    );
}

export default App;
