import { useState } from 'react';
import { STATUS_CONTENT } from '../config/constants.js';
import { useNavigate } from 'react-router-dom';
// import todoStore from '../store/todoStore.js';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../slice/todoSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState(STATUS_CONTENT.NEW);

  const handleAddNewTodo = (e) => {
    // todoStore.addNewTodo({ content: valueInput, status: valueSelect });
    console.log('handleAddNewTodo');
    dispatch(addNewTodo({ content: valueInput, status: valueSelect }));
    e.preventDefault();
  };

  return (
    <div className="header">
      <h2>TO DO APPLICATION</h2>
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
        <button onClick={handleAddNewTodo}>Add</button>
      </form>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            navigate(`/new`);
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            navigate(`/doing`);
          }}
        >
          Doing
        </button>
        <button
          onClick={() => {
            navigate(`/done`);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Header;
