import React, { useState } from 'react';
import './todo.css';


const AddTask = ({ addTask }) => {
    const [value, updateValue] = useState("");

    let add = (e) => {
        e.preventDefault();
        if (value !== "") {
            addTask(value);
            updateValue("");
        }
    }

    return (
        <form onSubmit={add}>
            <input type='text' value={value} onChange={e => updateValue(e.target.value)} />
            <button type='submit'> <i class="material-icons"> add </i> </button>
        </form>
    );
}


const ToDoList = () => {
    const addTask = text => updateTask([...tasks, { text }])

    const [tasks, updateTask] = useState([])


    const toggleTask = (index) => {
        const newTask = [...tasks];
        console.log(newTask[index].status);
        if (newTask[index].status)
            newTask[index].status = false;
        else
            newTask[index].status = true;
        updateTask(newTask);
    }

    const deleteTask = index => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        updateTask(newTask);
    }


    return (
        <div className="container">
            <h1> Calibraint To Do List </h1>

            <AddTask addTask={addTask} />
            { tasks.map((task, index) => (
                <div className="task-list">
                    <span onClick={() => toggleTask(index)} className={!task.status ? "completed" : "incomplete"} >
                        {index + 1}. {task.text}
                    </span>
                    <button onClick={() => deleteTask(index)}> <i class="material-icons"> delete </i></button>
                </div>

            ))}

        </div>)

}

export default ToDoList;