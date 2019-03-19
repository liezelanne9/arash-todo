import React from 'react';
import TodoListEntry from './TodoListEntry';

export default function TodoList(props) {
  return (
    <div>
      <h3>To-dos:</h3>
      <ul >
        {props.todos.map(todo => (
          <li key={todo.id}>
            <TodoListEntry todo={todo} delete={props.delete} />
          </li>
        ))}
      </ul>
    </div>
  )
}