import { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addToDoList } from "../action/todo";
import { ToDoList } from "../components/ToDoList";
import { TodoEdit } from "../components/TodoEdit";

function HomePage(props) {

    const todoList = useSelector(state => state.todo.list);
    const activeId = useSelector(state => state.todo.activeId);

    const dispatch = useDispatch();

    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos,
        {
            id: uuidv4(), task: todo, complete: false, isEditing: false
        }]);
    }

    const deleteToDo = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        );
    
    }

    const editTask = (task,id) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo
            )
        )
    }

    useEffect(() => {
        if (todos.length > 0) {
            dispatch(addToDoList(todos));
        }

    }, [todos, dispatch]);

    console.log(todos);
    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo}></TodoForm>
            {todos.map((todo, index) => todo.isEditing ? (
                <TodoEdit key={index} editTask= {editTask} task={todo} ></TodoEdit>
            ):(
                <ToDoList key={index}  task={todo} deleteToDo={deleteToDo} editTodo={editTodo}></ToDoList>
            ))}

        </div>
    )
}   

export default HomePage;