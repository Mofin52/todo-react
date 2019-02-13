import React from 'react';

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
                <button type='submit'>+</button>
                <button type='basic' onClick={(ev) => {
                    ev.preventDefault();
                    props.sortItemsByTitle();
                }}>Sort {props.sortOrder}</button>
                <button type='basic' onClick={(ev) => {
                    ev.preventDefault();
                    props.clearData();
                }}>Clear</button>
            </form>
        </div>
    )
}