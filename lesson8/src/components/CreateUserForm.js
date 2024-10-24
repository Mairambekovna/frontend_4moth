import React from 'react';
import { useForm } from 'react-hook-form';

const CreateUserForm = ({ onSubmit }) => {
    const { register, handleSubmit,
        formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
                type="text"
                placeholder="Name"
                {...register('name', { required: true })}
                style={{ padding: '5px', border: '1px solid #ccc' }}
            />
            {errors.name && <span>Name is required</span>}

            <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
                style={{ padding: '5px', border: '1px solid #ccc' }}
            />
            {errors.email && <span>Email is required</span>}

            <input
                type="text"
                placeholder="Username"
                {...register('username', { required: true })}
                style={{ padding: '5px', border: '1px solid #ccc' }}
            />
            {errors.username && <span>Username is required</span>}

            <button type="submit" style={{ padding: '5px 15px', backgroundColor: 'black', color: 'white' }}>
                Create
            </button>
        </form>
    );
};

export default CreateUserForm;
