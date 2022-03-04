import { useState } from 'react';
import { STATUS_CONTENT } from '../config/constants.js';

function Header({ addNewTodo }) {
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState(STATUS_CONTENT.NEW);

  return (
    <div className="header">
      <h2>TO DO LIST APPLICATION</h2>
      <div>
        <div>
          <input value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
          <select value={valueSelect} onChange={(e) => setValueSelect(e.target.value)}>
            <option value={STATUS_CONTENT.NEW}>New</option>
            <option value={STATUS_CONTENT.DONE}>Done</option>
            <option value={STATUS_CONTENT.DOING}>Doing</option>
          </select>
        </div>
        <button onClick={() => addNewTodo({ content: valueInput, status: valueSelect })}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Header;
