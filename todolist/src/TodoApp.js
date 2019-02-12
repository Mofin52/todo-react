import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoControls from './TodoControls';
import TodoList from './TodoList';

export default class TodoApp extends Component {
    state = {
        todos: []
    }
 
    //addItem
    //removeItem
    //editItem
    //reverseItems
    //saveItems/loadItems

    render() {
        return (
            <div className='todo-app'>
                <TodoControls/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}