import React from 'react';

export default (props) => {
    return (
        <div className={props.checked ? 'todo-item checked' : 'todo-item active'}>
            <div className='isCompleted' onClick={() => {
                props.toggle(props.id);
            }}></div>
            <h4>{props.title}</h4>
            <button type='basic' onClick={(ev) => {
                props.edit(props.id);
            }}>edit</button>
            <button type='basic' onClick={(ev) => {
                props.removeItem(props.id);
            }}>x</button>

        </div>)
}