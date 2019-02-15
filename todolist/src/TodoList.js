import React from 'react';
import TodoItem from './TodoItem';

export default (props) => (
        <div className='todo-list'>
            {props.todos.map((elem) =>
                <TodoItem
                    edit={props.edit}
                    toggle={props.toggle}
                    title={elem.title}
                    key={elem.key}
                    id={elem.id}
                    checked={elem.checked}
                    removeItem={props.removeItem}/>
            )}
        </div>
);
