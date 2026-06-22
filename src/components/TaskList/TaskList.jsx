import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({tasks,loggedInUserData}) => {
  return (
    <div id="taskList"className="h-[50%]  flex justify-start flex-nowrap overflow-x-auto items-center gap-5 w-full mt-14 p-5"> 

        {tasks.map((task,idx)=>{
            if(task.active){
              return <AcceptTask task={task}  key={idx} loggedInUserData={loggedInUserData}/>
            }
            if(task.completed){
              return <CompleteTask task={task} key={idx} />
            }
            if(task.newTask){
              return <NewTask task={task} key={idx}  loggedInUserData={loggedInUserData}/>
            }
            if(task.failed){
              return <FailedTask task={task} key={idx}/>
            }

          
        })}
    </div>
  )
}

export default TaskList
