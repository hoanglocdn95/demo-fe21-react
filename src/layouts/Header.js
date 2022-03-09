import { useState } from 'react';
import { STATUS_CONTENT } from '../config/constants.js';

function Header({ addNewTodo }) {
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState(STATUS_CONTENT.NEW);

  const handleAddNewTodo = (e) => {
    addNewTodo({ content: valueInput, status: valueSelect });
    e.preventDefault();
  };

  return (
    <div className="header">
      <h2>TO DO LIST APPLICATION</h2>
      <form>
        <div>
          <input
            name="content"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <select
            name="status"
            value={valueSelect}
            onChange={(e) => setValueSelect(e.target.value)}
          >
            <option value={STATUS_CONTENT.NEW}>New</option>
            <option value={STATUS_CONTENT.DONE}>Done</option>
            <option value={STATUS_CONTENT.DOING}>Doing</option>
          </select>
        </div>
        <button onClick={(e) => handleAddNewTodo(e)} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Header;
