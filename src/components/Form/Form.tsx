import React from "react";

interface interfaceFrom {
    addTodo: (event: React.FormEvent<HTMLFormElement>) => void,
    inputValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
    todoValue: string
};

const Form: React.FC<interfaceFrom> = ({addTodo, inputValue, todoValue}) => {
    return (
        <div className="card bg-light" >
            <div className="card-header">Добавить новую задачу</div>
            <div className="card-body">
                <form onSubmit={(event) => addTodo(event)} id="form">
                    <div className="form-group">
                        <input onChange={(event) => inputValue(event)} value={todoValue} type="text" className="form-control" id="taskInput" placeholder="Текст задачи" required />
                        <small id="emailHelp" className="form-text text-muted">Что делаем, сколько времени тратим, какой результат получаем.</small>
                    </div>
                    <button type="submit" data-add-new className="btn btn-primary  btn-lg active">Добавить</button>
                </form>
            </div>
        </div>
    );
}

export default Form;