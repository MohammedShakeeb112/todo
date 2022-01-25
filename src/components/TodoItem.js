import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoItem() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    // const newTodo = [todo, ...todos];
    const newTodo = [...todos, todo];
    setTodos(newTodo);
    // console.log(newTodo);

    // console.log(todo.text);
    //console.log(newTodo)
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  return (
    <div>
      <h1>What's happening</h1>
      <TodoForm submit={addTodo} />
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoItem;
