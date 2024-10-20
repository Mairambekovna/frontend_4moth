import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit,
        reset,
        formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <h2>Добавить пользователя</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Имя</label>
                    <input {...register("name", { required: "Имя обязательно" })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Имя пользователя</label>
                    <input {...register("username", { required: "Имя пользователя обязательно" })} />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Введите корректный email"
                        }
                    })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Телефон</label>
                    <input {...register("phone", { required: "Телефон обязателен" })} />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div>
                    <label>Вебсайт</label>
                    <input {...register("website")} />
                </div>
                <div>
                    <button type="submit">Создать</button>
                    <button type="button" onClick={clearTable}>Очистить таблицу</button>
                </div>
            </form>

            <h2>Список пользователей</h2>
            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Имя пользователя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Вебсайт</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserForm;
