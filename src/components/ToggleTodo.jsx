import { BsToggles2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";

const ToggleTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <button onClick={() => handleToggle(id)}>
      <BsToggles2 />
    </button>
  );
};

export default ToggleTodo;
