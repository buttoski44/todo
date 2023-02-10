import "./input-container.styles.scss";
import { useState , useContext} from "react";
import { ListContext } from "../../context/List.context";

export const InputContainer = () => {
  const [task, setTask] = useState("");
  const { list, setList } = useContext(ListContext);

    const submitHandler = () =>{
      setList([...list, {task:task , id: Math.random() * 1000}]);
      setTask("");
    } 

    const changeHandler = (e) => {
      setTask(e.target.value);
    }

    return (
        <div className='inputcontainer'>
          
          <h2>Todo List</h2>
          <textarea name="paragraph_text" placeholder="Write here!" rows="7" value={task} onChange={changeHandler}></textarea>
          <button disabled={!task} onClick={submitHandler}>&#10003;</button>
        </div>
    )
}