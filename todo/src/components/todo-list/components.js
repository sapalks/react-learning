import React from "react";
import './style.css'
import TodoListItem from "../todo-list-items/components";

const TodoList = ({items=[]}) => {
    const list = items.map((item)=>{
        const {id, ...props}=item;
        return (
            <li key={id}>
                <TodoListItem {...props }/>
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
        {list}
        </ul>
    )
}

export default TodoList;