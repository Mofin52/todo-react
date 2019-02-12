import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className='todo-controls'>
            <form onSubmit={props.addItem}>
                <input placeholder='your todo here...'/>
                <button type='submit'>Add</button>
                <button type='basic'>Sort by title</button>
            </form>
        </div>
    )
}