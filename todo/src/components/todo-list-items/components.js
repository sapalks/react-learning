import React from "react";
import './style.css'

const TodoListItem = ({label, important=false}) => {
    const style = {
        color: important ? 'red' : 'black'
    };
    return (<span
        style={style} 
        className="list-group-item todo-list-item"
        >{label}</span>);
};

export default TodoListItem;