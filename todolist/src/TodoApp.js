import React, { Component } from 'react';
import TodoControls from './TodoControls';
import TodoList from './TodoList';
import EditForm from './EditForm';
import './TodoApp.css';

export default class TodoApp extends Component {
    state = {
      todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
      sorted: Boolean(localStorage.getItem('sorted')) || false,
      textInForm: '',
      textInEditForm: '',
      showEditForm: false,
      idToEdit: 0,
    }

    addItem = item => {
      this.setState({
        todos: [item, ...this.state.todos],
        textInForm: '',
        sorted: false,
      }, () => {
        this.updateSave();
      });
    }

    handleTextChange = (event) => {
      this.setState({
        textInForm: event.target.value,
      });
    }

    handleTextChangeInEditForm = (event) => {
      this.setState({
        textInEditForm: event.target.value,
      });
    }

    saveChanges = () => {
      this.setState({
        todos: [...this.state.todos].map(item => {
          if (item.id === this.state.idToEdit) {
            item.title = this.state.textInEditForm;
          }
          return item;
        }),
        textInEditForm: '',
        idToEdit: 0,
        sorted: false,
      });
    }

    removeItem = (id) => {
      this.setState({
        todos: [...this.state.todos].filter(item => item.id !== id),
      }, () => {
        this.updateSave();
      });
    }

    sortItemsByTitle = () => {
      if (!this.state.sorted) {
        this.setState({
          todos: [...this.state.todos].sort((a, b) => a.title > b.title ? 1 : -1),
          sorted: true,
        }, () => {
          this.updateSave();
        });
      } else {
        this.setState({
          todos: [...this.state.todos].sort((a, b) => a.title > b.title ? -1 : 1),
          sorted: false,
        }, () => {
          this.updateSave();
        });
      }
    }

    clearData = () => {
      this.setState({
        todos: [],
        sorted: false,
        textInForm: '',
      }, () => {
        this.updateSave();
      });
    }

    updateSave = () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      localStorage.setItem('sorted', this.state.sorted);
    }

    toggleItemState = (id) => {
      this.setState({
        todos: [...this.state.todos].map(item => {
          if (item.id === id) {
            item.checked = !item.checked;
          }
          return item;
        }),
      }, () => {
        this.updateSave();
      });
    }

    showEditForm = (id) => {
      this.setState({
        showEditForm: true,
        idToEdit: id,
      });
    }

    hideEditFofm = () => {
      this.setState({
        showEditForm: false,
        idToEdit: 0,
        textInEditForm: '',
      });
    }

    render() {
      return (
            <div className='todo-app'>
                <TodoControls
                    title={this.state.textInForm}
                    sortOrder={this.state.sorted ? 'Z-A' : 'A-Z'}
                    addItem={this.addItem}
                    handleTextChange={this.handleTextChange}
                    sortItemsByTitle={this.sortItemsByTitle}
                    clearData={this.clearData}
                />
                <TodoList
                    todos={this.state.todos}
                    removeItem={this.removeItem}
                    toggle={this.toggleItemState}
                    edit={this.showEditForm}
                />
                <EditForm
                    shown={this.state.showEditForm}
                    textInEditForm={this.state.textInEditForm}
                    idToEdit={this.idToEdit}
                    hide={this.hideEditFofm}
                    handleTextChangeInEditForm={this.handleTextChangeInEditForm}
                    saveChanges={this.saveChanges}
                />
            </div>
      );
    }
}

