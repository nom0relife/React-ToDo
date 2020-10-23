import React from 'react'

export default function Done({ text, todo, todos, setTodos, done, dones, setDones }) {

    const deleteHandler = () => {
        setDones(dones.filter((element) => element.id !== done.id));
    }

    const redoHandler = () => {
        setDones(dones.filter((element) => {
            element.completed = false;
            return setTodos([...todos, element])
        })
        );
    };

    return (
        <div className="todo-container">
            <li>
                <div className="done-text">{done.text}</div>
                <button onClick={redoHandler} className="button2">
                    <i class="fas fa-redo"></i>
                </button>
                <button onClick={deleteHandler} className="button2">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </div>
    );
}
