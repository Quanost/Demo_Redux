

export const addToDoList =(todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const setActiveToDo = (todo) => {
    return {
        type: 'SET_ACTIVE_TODO',
        payload: todo
    }
}