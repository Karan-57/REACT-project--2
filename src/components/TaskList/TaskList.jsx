import PriorityTab from "../Dashboard/PriorityTab";

const TaskList = ({tasks}) => {
  console.log(tasks);
 
  return (
    <div id="taskList"className="h-[50%]  flex justify-start flex-nowrap overflow-x-auto items-center gap-5 w-full mt-14 p-5"> 
      {tasks.map((task,idx)=>{
        return(
          <div key={idx} className="bg-blue-500 w-75 h-full rounded-lg shrink-0 py-4 px-6">
            <div className=" w-full flex justify-between">
              <PriorityTab priority={task.priority}/>
                <h6 className="font-medium">{new Date(task.date).toLocaleDateString(
                                              'en-GB',
                                              {
                                                day:'numeric',
                                                month:'short',
                                                year:'numeric'
                                              }
                 )}</h6>
            </div>
            <h1 className="text-3xl font-bold mt-10">{task.title}</h1>
            <p className="mt-5">{task.description}</p>
          </div>
        )
        })}

      
      




    </div>
  )
}

export default TaskList
