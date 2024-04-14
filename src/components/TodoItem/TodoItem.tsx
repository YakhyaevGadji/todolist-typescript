import React from "react";
import clossIcon from "../../assets/cross.svg";
import doneIcon from "../../assets/tick.svg";

type TypeTodoItem = {
    id: number,
    title: string,
    completed: boolean
}

interface TodoItemInterface {
    todoItem: TypeTodoItem
}

const TodoItem: React.FC<TodoItemInterface> = ({todoItem}) => { 
    return (
        <li id={todoItem.id} className="list-group-item d-flex justify-content-between task-item">
            <span className={`task-title ${todoItem.completed ? 'completed' : ''}`}>{todoItem.title}</span>
            <div className="task-item__buttons">
                <button type="button" data-action="done" className="btn-action">
                    <img src={clossIcon} alt="Done" width="18" height="18"/>
                </button>
                <button onClick={() => console.log(true)} type="button" data-action="delete" className="btn-action">
                    <img src={doneIcon} alt="Done" width="18" height="18"/>
                </button>
            </div>
        </li>
    );
}
 
export default TodoItem;