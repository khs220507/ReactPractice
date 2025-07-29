import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([...todos, {id : Date.now(), text, done: false}]);
    setText('');
  }
  
  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className='todo-warpper'>
      
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span
              onClick={() => toggleDone(todo.id)}
              className={`todo-text ${todo.done ? 'done' : ''}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="add-button">
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
