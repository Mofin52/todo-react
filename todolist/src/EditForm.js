import React from 'react';

export default (props) => {
    return (
        <div className={props.shown ? 'edit-form shown' : 'edit-form hidden'}>
            <div className='container'>
                <form>
                    <input placeholder='Enter new task title'
                        onChange={props.handleTextChangeInEditForm}
                        value={props.textInEditForm}
                    />
                    <div className='edit-buttons'>
                        <button type='submit' onClick={(ev) => {
                            ev.preventDefault();
                            props.saveChanges();
                            props.hide();
                        }}>Save</button>
                        <button type='basic' onClick={(ev) => {
                            ev.preventDefault();
                            props.hide();
                        }}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}