import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="todo-app">
      <TodoItem/>
      {/* <button className="add-item" type="button" name="button" onClick={ ()=>{console.log("button clicked"); {<TodoItem />}} } >Add item</button> */}
    </div>
  );
}

export default App;
