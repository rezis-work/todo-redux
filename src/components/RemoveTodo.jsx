import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const RemoveTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <button onClick={() => handleRemove(id)}>
      <IoTrashOutline className=" text-sm w-3" />
    </button>
  );
};

export default RemoveTodo;
