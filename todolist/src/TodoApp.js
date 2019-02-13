import React, {Component} from 'react';
import TodoControls from './TodoControls';
import TodoList from './TodoList';
import './TodoApp.css'

export default class TodoApp extends Component {
    state = {
        todos: [],
        textInForm: ''
    }
 
    addItem = item => {
        this.setState({
            todos: [item, ...this.state.todos],
            textInForm: '',
        })
    }

    handleTextChange = (event) => {
        this.setState({
            textInForm: event.target.value
        });
    }

    removeItem = (id) => {
        this.setState({
            todos: [...this.state.todos].filter(item => item.id !== id)
        })
    }

    sortItemsByTitle = () => {
        this.setState({
            todos: [...this.state.todos].sort((a, b) => {
                return a.title > b.title ? 1 : -1;
            })
        })
    }
    
    //editItem
    //reset
    //saveItems/loadItems

    render() {
        return (
            <div className='todo-app'>
                <TodoControls
                    addItem={this.addItem}
                    handleTextChange={this.handleTextChange}
                    title={this.state.textInForm}
                    sortItemsByTitle={this.sortItemsByTitle}
                />
                <TodoList
                    todos={this.state.todos}
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}