
const initalState ={
    list: [],
    activeId: null
}
const todoReducer = (state =initalState, action) => {
    switch(action.type){
        case 'ADD_TODO' : {
            const newList = [...state.list];
            newList.push(action.payload)
            return {
                ...state,
                list: newList
            };
        }
        case 'SET_ACTIVE_TODO' : {
            return state;
        }

        default: 
        return state;
    }
}

export default todoReducer;