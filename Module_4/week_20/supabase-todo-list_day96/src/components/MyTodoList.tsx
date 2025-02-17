import { ITask } from "../App";
import MyTasks from "./MyTasks";

interface IMyTodoListProps{
    tasks: Array<ITask>
}


const MyTodoList:React.FC<IMyTodoListProps> = ({tasks}) => {
    return (
        <div className="list-container">
             <h1>My Tasks</h1>
             <div>
                {
                  tasks.map((singleTask, key) => <MyTasks key={key} name={singleTask.name} amount={singleTask.amount}/>)  
                }
             </div>
        </div>
      );
}
 
export default MyTodoList;