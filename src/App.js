import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="todo-app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
