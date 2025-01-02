import React, {useEffect, useState} from 'react';
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/todoList/TodoList";
import Button from "../../components/button/Button";


const MainPage = () => {
    const [show, setShow] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])


    const handleShow = () => {
        setShow(!show)
    }


    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = () => {
        setTasks(prev => [...prev, {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleDone = (id) => {
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }

    const handleEdit = (editTodo) => {

    }

    useEffect(() => {
        console.log(useEffect)
    }, [show]);

    return (
        <React.Fragment>
            { show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInputTask={onChangeInputTask}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                >
                    <h1>Modal</h1>
                </Modal>
            }
            <Button
                title={'open'}
                action={handleShow}
            />
            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
        </React.Fragment>
    );
};

export default MainPage;