import { useState } from "react"

export const TodoEdit = ({ editTask, task }) => {

    const [value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input type="text" placeholder="update to do" onChange={event => setValue(event.target.value)} value={value} className="todo-input"></input>
                <button type="submit" className="todo-btn">Update Task</button>
            </form>
        </>
    )
}