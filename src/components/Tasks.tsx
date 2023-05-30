import { useId } from "react"
import { taskState } from "../types"


interface Props {
    tasks: Array<taskState>
    deleteTask: (id: number) => void
}

const Tasks: React.FC<Props> = ({ tasks, deleteTask }) => {
    if (tasks.length === 0) return <h2>There is <span className="red">no</span> things <span className="green">to do</span></h2>

    return (
        <div className="taskContainer">
            {tasks.map(task => (
                <div className="task" key={task.id}>
                    <span onClick={() => deleteTask(task.id)}>X</span>
                    <h3>{task.title}</h3>
                    <p>{task.date.toString()}</p>
                </div>
            ))}
        </div>
    )
}

export default Tasks