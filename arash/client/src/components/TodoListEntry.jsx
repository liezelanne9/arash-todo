import React from 'react';

export default function TodoListEntry(props){
  return (
    <div onClick={() => props.delete(props.todo.name)}>
      {props.todo.name}
    </div>
  );
}