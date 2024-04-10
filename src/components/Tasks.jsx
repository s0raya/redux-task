import { useSelector } from "react-redux";

export function Tasks() {
    const taskList = useSelector((state) => state.tasks);
    return (
        <div>
            <ul>
                {taskList.map(task => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </div>
    )
}