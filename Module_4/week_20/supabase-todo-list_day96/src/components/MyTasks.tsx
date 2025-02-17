
interface IMyTasksProps{
    name: string,
    amount? : number
}

const MyTasks:React.FC<IMyTasksProps> = (props) => {
    return ( 
        <>
        <div className="my-tasks">
            <p>{props.name}</p>
            <p>amount: <span>{props.amount}</span></p>
        </div>
       {/*  <hr /> */}
        </>
     );
}
 
export default MyTasks;