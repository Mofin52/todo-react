import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className='todo-controls'>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.addItem({
                    title: props.title,
                    key: new Date().getTime(),
                    checked: false,
                })
            }}>
                <input placeholder='your todo here...'
                    onChange={props.handleTextChange}
                    value={props.title}
                />
                <button type='submit'>Add</button>
                <button type='basic'>Sort by title</button>
            </form>
        </div>
    )
}