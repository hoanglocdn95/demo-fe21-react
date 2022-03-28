import React, { useState, useEffect, useRef } from 'react';
import map from 'lodash/map';
import './App.css';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import Modal from './components/Modal';

function App() {
  map([1, 2, 3], (item) => console.log(item));
  return (
    <>
      <Modal />
      <div className="todo-app">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
