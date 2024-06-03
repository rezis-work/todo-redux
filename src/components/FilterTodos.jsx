import { useDispatch } from "react-redux";
import { filterTodo } from "../features/todo/todoSlice";

const FilterTodos = () => {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterTodo());
  };

  return (
    <button className=" mt-10" onClick={handleFilter}>
      Filter
    </button>
  );
};

export default FilterTodos;
