import React, {useState} from "react";
import { render } from "react-dom";


export default function Todo(props) {
    const [task, setTask] = useState(true);
    const { task1, task2, task3, task4 } = props
    const toggleTask = () => {
        setTask(!task)
    }
    console.log(setTask)
    
    const style = {
        color: task === false ? 'red' : null,
        textDecoration: task === false ? 'line-through' : null
    }
    
    return (
        <div className = 'container'>
            <h1>Todo List</h1>
            <div style = {style}>
                The First Task is {task1}
                <button onClick={toggleTask}>{task ? 'Task Completed' : 'Task Not Completed'}</button>
            </div>
            <div style = {style}>
                The Second Task is {task2}
                <button onClick={toggleTask}>{task ? 'Task Completed' : 'Task Not Completed'}</button>
            </div>
            <div style = {style}>
                The Third Task is {task3}
                <button onClick={toggleTask}>{task ? 'Task Completed' : 'Task Not Completed'}</button>
            </div>
            <div style = {style}>
                The Fourth Task is {task4}
                <button onClick={toggleTask}>{task ? 'Task Completed' : 'Task Not Completed'}</button>
            </div>

        </div>
    )

}