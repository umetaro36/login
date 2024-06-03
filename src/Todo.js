import React from 'react'

const Todo = ({todo, toggleTodo}) => {

    const  handleTodoCLick = () => {
        toggleTodo(todo.id);
    };

  return (
    <div>
        <label>
        <input type='checkbox' checked={todo.completed} readOnly onChange={handleTodoCLick}/>
        </label>
        {todo.name}
    </div>
  );
};

export default Todo;