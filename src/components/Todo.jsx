import { useSelector } from "react-redux";

const Todo = () => {
  const todo = useSelector((store) => store.todo.todos);
  console.log(todo);
  return <div>Todo</div>;
};

export default Todo;
