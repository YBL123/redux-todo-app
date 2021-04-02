import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem'

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 442341242,
  },
  {
    item: 'todo2',
    done: true,
    id: 432423412312,
  },
];

function App() {
  return (
    <div className="app">
      <div className="app-containter">
        <div className="app-todo-container">
          {todoList.map((item) => (
            <TodoItem 
            name={item.item} 
            done={item.done}
            id={item.id}
            />
          ))}
        </div>
      </div>

      <Input />
    </div>
  );
}

export default App;
