import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map((elem) => {
                return <TodoItem title={elem.title} key={elem.key} id={elem.id} removeItem={props.removeItem}/>
            })}
        </div>
    )
}