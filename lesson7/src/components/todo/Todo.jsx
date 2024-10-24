import React, { useState } from 'react';

function Todo({ todo, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.title);

    const handleUpdate = () => {
        updateTodo(todo.id, editValue);
        setIsEditing(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '300px',
            alignItems: 'center',
            marginTop: '10px'
        }}>
            {isEditing ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                />
            ) : (
                <h3>{todo.title}</h3>
            )}

            {isEditing ? (
                <button onClick={handleUpdate}>save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>update</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    );
}

export default Todo;
