import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoControls from './TodoControls';
import TodoList from './TodoList';

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
    
    //removeItem
    //editItem
    //reverseItems
    //saveItems/loadItems

    render() {
        return (
            <div className='todo-app'>
                <TodoControls
                    addItem={this.addItem}
                    handleTextChange={this.handleTextChange}
                    title={this.state.textInForm}
                />
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}