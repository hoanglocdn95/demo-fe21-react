import React, { useEffect } from 'react';
import * as statusContent from '../config/constants.js';

function TodoItem({ content, status, changeStatus, deleteItem }) {
  useEffect(() => {
    console.log('render lần 1');

    return () => {
      console.log('render lần cuối');
    };
  }, []);

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

  return (
    <div className="todoItem">
      <div className="todoItem__content">
        <p style={chooseStyleStatus()}>{content}</p>
      </div>
      <div className="todoItem__button">
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
      </div>
    </div>
  );
}

export default TodoItem;
