import React, { useState } from 'react';
import * as statusContent from '../config/constants.js';

function TodoItem({ content, status, changeStatus, deleteItem, saveContent }) {
  const [isShowInput, setIsShowInput] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const chooseStyleStatus = () => {
    switch (status) {
      case statusContent.STATUS_CONTENT.NEW:
        return {
          color: 'red',
          fontStyle: 'italic',
        };
      case statusContent.STATUS_CONTENT.DOING:
        return {
          color: 'blue',
          fontWeight: 'bold',
        };
      case statusContent.STATUS_CONTENT.DONE:
        return {
          color: 'green',
          textDecoration: 'line-through',
        };
      default:
        return {
          color: 'black',
        };
    }
  };

  const handleSaveItem = () => {
    setIsShowInput(false);
    setValueInput('');
    saveContent(valueInput);
  };

  return (
    <div className="todoItem">
      <div className="todoItem__content">
        {isShowInput ? (
          <input
            placeholder={content}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        ) : (
          <p style={chooseStyleStatus()}>{content}</p>
        )}
      </div>
      <div className="todoItem__button">
        {!isShowInput ? (
          <>
            <button className="todoItem__button--green" onClick={() => setIsShowInput(true)}>
              Edit
            </button>
            <button
              className="todoItem__button--green"
              style={chooseStyleStatus()}
              onClick={changeStatus}
            >
              {status}
            </button>
            <button className="todoItem__button--black" onClick={deleteItem}>
              Clear
            </button>
          </>
        ) : (
          <button className="todoItem__button--green" onClick={handleSaveItem}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
