import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TodoItem from '../components/TodoItem';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import DoneScreen from '../screens/DoneScreen';
import AllScreen from '../screens/AllScreen';
import NewScreen from '../screens/NewScreen';
import DoingScreen from '../screens/DoingScreen';
import * as statusContent from '../config/constants.js';
// import todoStore from '../store/todoStore.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../slice/todoSlice';

function Body() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log('Body ~ todo', todo);

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
            // changeStatus={() => todoStore.changeStatus(index)}
            deleteItem={() => dispatch(deleteItem({ indexItem: index }))}
            // saveContent={(content) => todoStore.saveContent(index, content)}
          />
        );
      });
  };

  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<AllScreen>{renderItem()}</AllScreen>} />
        <Route
          path="new"
          element={<NewScreen>{renderItem(statusContent.STATUS_CONTENT.NEW)}</NewScreen>}
        />
        <Route
          path="doing"
          element={<DoingScreen>{renderItem(statusContent.STATUS_CONTENT.DOING)}</DoingScreen>}
        />
        <Route
          path="done"
          element={<DoneScreen>{renderItem(statusContent.STATUS_CONTENT.DONE)}</DoneScreen>}
        />
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
