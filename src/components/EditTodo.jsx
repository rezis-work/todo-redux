import { useRef, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/todo/todoSlice";

const EditTodo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: todo.id, newText })); // Corrected dispatch call
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <input
          ref={inputRef}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSaveEdit}
          style={{
            paddingLeft: "10px",
          }}
        />
      ) : (
        <>
          <button onClick={handleEdit}>
            <MdOutlineModeEditOutline />
          </button>
        </>
      )}
    </>
  );
};

export default EditTodo;
