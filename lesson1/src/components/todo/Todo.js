import React from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';

const Todo = ({todo, handleDelete}) => {
    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p className={classes.title}>title: {todo.title}</p>
            <button onClick={() => handleDelete(todo.id)}>
                Delete
            </button>
            {/*<Button title={'delete'} action={handleDelete}/>*/}
        </li>
    );
};

export default Todo;