import PriorityTab from "./PriorityTab"
const  CompleteTask = ({task}) => {
    
  return (
    <div  className="bg-[#243447] w-90 h-full rounded-lg shrink-0 py-4 px-6">
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
        <div className="mt-30 flex justify-center relative bottom-0">
            <div className="bg-green-500 rounded-md px-3 py-2 w-[85%] text-center">Completed</div>
        </div>
    </div>
  )
}

export default CompleteTask
