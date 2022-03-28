import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TodoItem from '../components/TodoItem';
import { Routes, Route } from 'react-router-dom';
import DoneScreen from '../screens/DoneScreen';
import AllScreen from '../screens/AllScreen';
import NewScreen from '../screens/NewScreen';
import DoingScreen from '../screens/DoingScreen';
import { STATUS_CONTENT } from '../config/constants.js';
// import todoStore from '../store/todoStore.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, fetchTodos, changeStatus, saveContent } from '../slice/todoSlice';

function Body() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const renderItem = (status = null) => {
    // return todoStore.TodoArray.filter((item) => {
    return todo.listTodo
      .filter((item) => {
        if (status) return item.status === status;
        return true;
      })
      .map((item, index) => {
        return (
          <TodoItem
            key={index}
            {...item}
            changeStatus={() =>
              dispatch(
                changeStatus({
                  id: item.id,
                  status:
                    item.status === STATUS_CONTENT.NEW ? STATUS_CONTENT.DOING : STATUS_CONTENT.DONE,
                })
              )
            }
            deleteItem={() => dispatch(deleteItem({ id: item.id }))}
            saveContent={(content) => dispatch(saveContent({ id: item.id, content }))}
          />
        );
      });
  };

  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<AllScreen>{renderItem()}</AllScreen>} />
        <Route path="new" element={<NewScreen>{renderItem(STATUS_CONTENT.NEW)}</NewScreen>} />
        <Route
          path="doing"
          element={<DoingScreen>{renderItem(STATUS_CONTENT.DOING)}</DoingScreen>}
        />
        <Route path="done" element={<DoneScreen>{renderItem(STATUS_CONTENT.DONE)}</DoneScreen>} />
      </Routes>
    </div>
  );
}

Body.propTypes = {
  todoArray: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  // changeStatus: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default observer(Body);
