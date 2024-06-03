import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import Todo from "./components/Todo";

function App() {
  const todoList = useSelector((store) => store.todo.todos);
  return (
    <div className="App">
      <h1 className=" mb-10 text-center text-[#40c057]">
        Hello to the Fa-TODO List
      </h1>
      <AddTodo />
      <Todo />
      {todoList.length >= 1 && <FilterTodos />}
    </div>
  );
}

export default App;
