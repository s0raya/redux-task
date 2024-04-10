import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todosSlice";

const AddTaskInput = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({text}));
        setText("");
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Add task: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Añadir</button>
        </form>
        </>
    )
}

export default AddTaskInput;