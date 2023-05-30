import { useState } from "react"
import { taskState } from "../types"

interface Props {
    addTask: (task: taskState) => void
}

const Form: React.FC<Props> = ({ addTask }) => {
    const [task, setTask] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (task.trim().length === 0) return 
        addTask({
            // maybe an id can be repeated
            id: Math.floor(Math.random() * 9999999) + 1,
            title: task,
            date: new Date().toLocaleString()
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <input value={task} onChange={handleChange} type="text" name="task" placeholder="buy the dinner" />
            <button>Add</button>
        </form>
    )
}

export default Form