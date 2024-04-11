import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todosSlice";

const AddTaskInput = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleClickAdd = () => {
        dispatch(addTask({
            id: Math.random(), 
            text: text,
        }));
        setText("");
    }

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleClickAdd}>Añadir</button>
        </>
    )
}

export default AddTaskInput;