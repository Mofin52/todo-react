import React from 'react';

export default (props) => (
      <div className={props.shown ? 'edit-form shown' : 'edit-form hidden'}>
          <div className='container'>
              <form>
                  <input placeholder='Enter new task title'
                      onChange={props.handleTextChangeInEditForm}
                      value={props.textInEditForm}
                      className='edit-input'
                  />
                  <div className='edit-buttons'>
                      <button type='submit' className='btn btn-secondary rounded-from-left' onClick={(ev) => {
                          ev.preventDefault();
                          props.saveChanges();
                          props.hide();
                      }}>Save</button>
                      <button type='basic' className='btn btn-secondary rounded-from-right' onClick={(ev) => {
                          ev.preventDefault();
                          props.hide();
                      }}>Cancel</button>
                  </div>
              </form>
          </div>
      </div>
);
