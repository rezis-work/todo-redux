import { useSelector } from "react-redux";
import RemoveTodo from "./RemoveTodo";
import EditTodo from "./EditTodo";
import ToggleTodo from "./ToggleTodo";

const Todo = () => {
  const todo = useSelector((store) => store.todo.todos);
  return (
    <>
      {todo.map((todo, i) => (
        <div
          className=" w-[100%] mt-8 p-3 border rounded-lg font-bold flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between items-center flex-wrap items-start px-2"
          key={todo.id}
          style={{
            backgroundColor: todo.completed ? "#51cf66" : "",
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          <p
            className="break-words w-full sm:w-auto flex-grow text-left"
            style={{
              textDecoration: todo.completed ? "line-through" : "",
              letterSpacing: "1px",
            }}
          >
            {i + 1}) {todo.text}
          </p>
          <div className=" flex gap-3">
            <EditTodo todo={todo} />
            <RemoveTodo id={todo.id} />
            <ToggleTodo id={todo.id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
