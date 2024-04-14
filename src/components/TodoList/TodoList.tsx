import React from "react";
import { useAppSelector } from "../../../Hook";
import TodoItem from "../TodoItem/TodoItem";

type TypeTodoList = {
    id: number,
    title: string,
    completed: boolean 
};

interface InterfaceTodList {
    todoList: TypeTodoList[]
};

const TodoList: React.FC<InterfaceTodList> = ({todoList}) => {
    console.log(todoList);
    return (
        <div className="card mb-4">
            <ul id="tasksList" className="list-group list-group-flush">
                {todoList.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todoItem={todo}/>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default TodoList;
