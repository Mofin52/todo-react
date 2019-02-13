import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <div className='todo-controls'>
            <form onSubmit={(event) => {
                event.preventDefault();
                const uniqueId = new Date().getTime();
                props.addItem({
                    title: props.title,
                    key: uniqueId,
                    id: uniqueId,
                    checked: false,
                })
            }}>
                <input placeholder='your todo here...'
                    onChange={props.handleTextChange}
                    value={props.title}
                />
                <button type='submit'>Add</button>
                <button type='basic' onClick={(ev) => {
                    ev.preventDefault();
                    props.sortItemsByTitle();
                }}>Sort by title</button>
            </form>
        </div>
    )
}