import { useDispatch, useSelector } from "react-redux";
import {removeTask} from '../redux/todosSlice.js'

function Tasks() {
    const taskList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <ul>
            {taskList.map(task => (
            <li key={task.id}>
                {task.text}
                <button onClick={() => dispatch(removeTask(task.id))}>Eliminar</button>
            </li>
            
            ))}
        </ul>
    )
}

export default Tasks;