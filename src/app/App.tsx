import React from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";
import { useAppDispatch, useAppSelector } from '../../Hook';
import "./App.scss";
import { removeTodo, setTask, setValueTitle, toggleDone } from "../redux/slice/totoSlice";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const { todoList, todoValue } = useAppSelector((state) => state.todoSlice);

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setTask(todoValue))
        dispatch(setValueTitle(''));
    };

    const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueTitle(event.target.value));
    };

    const toggleTodoItem = (id: number) => {
        dispatch(toggleDone(id))
    };

    const removeTodoItem = (id: number) => {
        dispatch(removeTodo(id));
    };

    return (
        <div className="container">
            <Header />
            <TodoList todoList={todoList} toggleTodoItem={toggleTodoItem} removeTodoItem={removeTodoItem}/>
            <Form addTodo={addTodo} inputValue={inputValue} todoValue={todoValue}/>
        </div>
    );
} 

export default App;