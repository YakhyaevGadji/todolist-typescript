import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoItem = {
    id: number,
    title: string,
    completed: boolean
};

interface TypeInitialStore {
    todoList: TodoItem[],
    todoValue: string
}

const initialState: TypeInitialStore = {
    todoList: [],
    todoValue: ''
}

const counterSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setTask(state, action: PayloadAction<string>) {
            state.todoList.push({
                id: Date.now(),
                title: action.payload,
                completed: false
            });
        },
        toggleDone(state, action: PayloadAction<number>) {
            const todo = state.todoList.find(todo => todo.id === action.payload);
            
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        setValueTitle(state, action: PayloadAction<string>) {
            state.todoValue = action.payload
        }
    },
})

export const { setTask, toggleDone, removeTodo, setValueTitle } = counterSlice.actions;

export default counterSlice.reducer;