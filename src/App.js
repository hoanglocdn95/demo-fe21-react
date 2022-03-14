import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import { STATUS_CONTENT } from './config/constants.js';
import useCount from './hook/useCount.js';
import todoStore from './store/todoStore';

function App() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    setListTodo(todoStore.todoArray);
  }, []);

  const deleteItem = (indexItem) => {
    const arrTodo = listTodo;
    arrTodo.splice(indexItem, 1);
    setListTodo([...arrTodo]);
  };

  return (
    <div className="todo-app">
      <Header />
      <Body todoArray={listTodo} deleteItem={deleteItem} />
      <Footer />
    </div>
  );
}

export default App;
