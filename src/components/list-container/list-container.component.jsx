import "./list-container.styles.scss";
import { Task } from "../task/task.component";
import { useContext } from "react";
import { ListContext } from "../../context/List.context";


export const ListContainer = () =>{
  const { list } = useContext(ListContext);

  return(
      <div className='listcontainer'>
        <h2>Work List</h2>
        <hr />
        { list.map((task) => <Task task={task} key={task.id}/>)}
      </div>
  );       
}