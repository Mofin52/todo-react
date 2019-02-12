import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import TodoControls from './TodoControls';
import './TodoApp.css'
export default (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map((elem) => {
                return <TodoItem title={elem.title} key={elem.key}/>
            })}
        </div>
    )
}