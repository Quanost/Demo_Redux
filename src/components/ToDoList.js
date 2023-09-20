import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { element } from 'prop-types'


export const ToDoList = ({task, deleteToDo, editTodo}) => {
    // const todo =task.find((element) => {
    //     return element})
    return (
        <div className='Todo'>
            <p className={`${task.complete}` ? 'completed': ''}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faTrash} onClick={()=>deleteToDo(task.id)}></FontAwesomeIcon>
            </div>
        </div>
    )
}