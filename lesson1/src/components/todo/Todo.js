import React, {useState} from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';

const Todo = ({todo, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit}) => {
    const [input, setInput] = useState('')



    return (
        <>
            {
                isEdit && <div>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={() => {
                        handleEdit({
                            ...todo, title: input
                        })
                    }

                    }>
                        Save
                    </button>
                    <button>
                        Cancel
                    </button>
                </div>
            }

            <li className={classes.todo}>

                <p>id: {todo.id}</p>
                <p className={classes.title}>title: {todo.title}</p>

                <button onClick={() => handleDone(todo.id)}>
                    Done
                </button>

                <button onClick={() => handleCurrentEdit(todo.id)}>
                    Edit
                </button>

                <button onClick={() => handleDelete(todo.id)}>
                    Delete
                </button>

            </li>
        </>
    );
};

export default Todo;