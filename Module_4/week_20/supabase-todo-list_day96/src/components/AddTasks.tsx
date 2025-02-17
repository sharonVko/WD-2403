import { useState } from "react";
import { ITask } from "../App"; 
import { supabase } from "../utils/setupSupabase";
/* hier zuerst supabase insert bevor ich in app fetche */

interface IAddTasksProps{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const AddTasks:React.FC<IAddTasksProps> = ({setTasks}) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)

    async function addTask(){
        const task: ITask ={
            name,
            amount
        }
        const {error} = await supabase.from('todoTasks').insert(task)
        setTasks((prev:any) => { return [...prev, task]})
    }

    return ( 
        <div className="task-input-container">
            <input type="text" name="todo" id="" placeholder="write a task..." onChange={(e) => setName(e.target.value)} />
            <input type="number" name="amount" id="" placeholder="add amount(optional)" onChange={(e)=> setAmount(Number(e.target.value))} />
            <button onClick={addTask}>Add Task</button>

        </div>
     );
}
 
export default AddTasks;