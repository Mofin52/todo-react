import React from 'react';
import ReacDOM from 'react-dom';

export default (props) => {
    return (
        <div className='todo-item'>
            <div className='isCompleted'></div>
            <h4>{props.text}</h4>
            <button type='basic'>x</button>
        </div>)
}