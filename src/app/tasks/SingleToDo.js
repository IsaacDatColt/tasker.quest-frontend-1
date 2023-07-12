import React from 'react';

function SingleToDo({ location }) {
  const { selectedTodos } = location.state;

  return (
    <div>
      <h1>Selected Todos for {selectedTodos.date}</h1>
      <ul>
        {selectedTodos.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleToDo;
