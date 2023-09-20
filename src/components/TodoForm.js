import { useState } from "react"

export const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('');

    const handleAddToDo = (event) => {
        event.preventDefault();
        if(todo){
            addTodo(todo);
            setTodo('');
        }

    }
    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleAddToDo}>
                <input type="text" placeholder="add to do" onChange={event => setTodo( event.target.value)} value={todo} className="todo-input"></input>
                <button type="submit" className="todo-btn">Add task</button>
            </form>
        </>
    )
}