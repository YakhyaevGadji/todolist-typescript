import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import EmptyList from "../EmptyList";

type TypeTodoList = {
    id: number,
    title: string,
    completed: boolean 
};

interface InterfaceTodList {
    todoList: TypeTodoList[],
    toggleTodoItem: (id: number) => void,
    removeTodoItem: (id: number) => void
};

const TodoList: React.FC<InterfaceTodList> = ({todoList, toggleTodoItem, removeTodoItem}) => {
    return (
        <div className="card mb-4">
            <ul id="tasksList" className="list-group list-group-flush">
                {todoList.length <= 0 ? <EmptyList/> : false}
                {todoList.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todoItem={todo} toggleTodoItem={toggleTodoItem} removeTodoItem={removeTodoItem}/>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default TodoList;
