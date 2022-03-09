import { useState, useEffect } from 'react';
import './App.css';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import { STATUS_CONTENT } from './config/constants.js';
import useCount from './hook/useCount.js';

const todoArray = [
  {
    content: 'Dùng create-react-app tạo app',
    status: STATUS_CONTENT.NEW,
  },
  {
    content: 'Tạo Home Page, import vào App.js',
    status: STATUS_CONTENT.DOING,
  },
  {
    content: 'Tạo UI như design trong cái link figma',
    status: STATUS_CONTENT.DONE,
  },
];
function App() {
  const [listTodo, setListTodo] = useState([]);

  const { handleDoubleCount, handleIncreaseCount, count } = useCount(5);

  useEffect(() => {
    setListTodo(todoArray);
  }, []);

  const addNewTodo = (valueItem) => {
    setListTodo([
      ...listTodo,
      {
        content: valueItem.content,
        status: valueItem.status,
      },
    ]);
  };

  const changeStatus = (indexItem) => {
    const arrTodo = listTodo;

    arrTodo.splice(indexItem, 1, {
      content: listTodo[indexItem].content,
      status:
        listTodo[indexItem].status === STATUS_CONTENT.NEW
          ? STATUS_CONTENT.DOING
          : STATUS_CONTENT.DONE,
    });

    setListTodo([...arrTodo]);
  };

  const deleteItem = (indexItem) => {
    const arrTodo = listTodo;
    arrTodo.splice(indexItem, 1);
    setListTodo([...arrTodo]);
  };

  return (
    <div className="todo-app">
      <h1>{count}</h1>
      <button onClick={handleIncreaseCount}>+1</button>
      <button onClick={handleDoubleCount}>*2</button>
      <Header addNewTodo={addNewTodo} />
      <Body todoArray={listTodo} changeStatus={changeStatus} deleteItem={deleteItem} />
      <Footer />
    </div>
  );
}

export default App;
