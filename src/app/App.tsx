import React from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";
import { useAppDispatch, useAppSelector } from '../../Hook';
import "./App.scss";
import { setValueTitle } from "../redux/slice/totoSlice";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const { todoList, todoValue } = useAppSelector((state) => state.todoSlice);

    const addTodo = () => {
        console.log(true);
    };

    const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        dispatch(setValueTitle(event.target.value));
    };

    return (
        <div className="container">
            <Header />
            <TodoList todoList={todoList}/>
            <Form addTodo={addTodo} inputValue={inputValue} todoValue={todoValue}/>
        </div>
    );
} 

export default App;