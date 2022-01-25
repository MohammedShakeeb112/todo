import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    props.submit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    // console.log(input);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        className="todo-input"
        placeholder="add todo..."
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
