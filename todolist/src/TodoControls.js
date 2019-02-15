import React from 'react';

export default (props) => (
      <div className='todo-controls'>
          <form onSubmit={(event) => {
              event.preventDefault();
              const uniqueId = new Date().getTime();
              props.addItem({
                  title: props.title,
                  key: uniqueId,
                  id: uniqueId,
                  checked: false,
              });
          }}>
              <div className='input-form'>
                  <input placeholder='your todo here...'
                      onChange={props.handleTextChange}
                      value={props.title}
                      className='control rounded-from-left'
                  />
                  <button type='submit' className='btn btn-add rounded-from-right'>+</button>
              </div>
              <div className='btn-block'>
                  <button type='basic' className='btn btn-secondary' onClick={(ev) => {
                      ev.preventDefault();
                      props.sortItemsByTitle();
                  }}>Sort {props.sortOrder}</button>
                  <button type='basic' className='btn btn-secondary' onClick={(ev) => {
                      ev.preventDefault();
                      props.clearData();
                  }}>Clear</button>
              </div>
          </form>
      </div>
);

