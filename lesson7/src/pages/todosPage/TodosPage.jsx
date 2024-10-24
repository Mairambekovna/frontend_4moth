import { useEffect, useState } from "react";
import Todo from "../../components/todo/Todo";

const URL = 'http://localhost:8000/todos/';

function TodosPage() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [editValue, setEditValue] = useState(''); 

    async function getTodos() {
        const response = await fetch(URL);
        const data = await response.json();
        setTodos(data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    async function createTodo() {
        const data = {
            title: inputValue,
            status: false,
        };
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status === 201) {
            getTodos();
            setInputValue('');
        }
    }

    async function deleteTodo(id) {
        const response = await fetch(URL + id, {
            method: 'DELETE',
        });
        if (response.status === 200) {
            getTodos();
        }
    }

    async function updateTodo(id, newTitle) {
        const data = {
            title: newTitle,
        };
        const response = await fetch(URL + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200) {
            getTodos();
        }
    }

    return (
        <>
            <h2>Todo list</h2>

            <input
                type="text"
                value={inputValue}
                placeholder="введите задачу"
                onInput={(e) => setInputValue(e.target.value)}
            />
            <button onClick={createTodo}>create</button>

            {todos.length > 0 ? (
                todos.map((element) => (
                    <Todo
                        todo={element}
                        key={element.id}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                ))
            ) : (
                <p>Список пуст</p>
            )}
        </>
    );
}

export default TodosPage;
