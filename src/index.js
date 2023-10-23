import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './TodoList';
import store from './store'
import { Provider } from 'react-redux'
import AddTodo from './AddTodo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <AddTodo/>
    <TodoList />
  </Provider>

);


