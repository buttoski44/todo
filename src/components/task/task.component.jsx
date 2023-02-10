import "./task.styles.scss";
import { useContext } from "react"
import { ListContext } from "../../context/List.context"


export const Task = ({task}) => {
    const { deletTask } = useContext(ListContext);

    return (
    <div className='single-list' >
        <span className="logo" onClick={() => {deletTask(task.id)}}>&#10540;</span>
        <span className='todo-item'>{task.task}</span>
    </div>
    )
}
