import PriorityTab from "../Dashboard/priorityTab"
const AcceptTask = (task) => {
    
  return (
    <div  className="bg-blue-500 w-90 h-full rounded-lg shrink-0 py-4 px-6 ">
        <div className=" w-full flex justify-between">
            <PriorityTab priority={task.task.category}/>
                <h6 className="font-medium">{new Date(task.task.date).toLocaleDateString(
                                              'en-GB',
                                              {
                                                day:'numeric',
                                                month:'short',
                                                year:'numeric'
                                              }
            )}</h6>
        </div>
        <h1 className="text-3xl font-bold mt-10">{task.task.title}</h1>
        <p className="mt-5">{task.task.description}</p>
        <div className="mt-30 flex justify-between relative bottom-0 px-4">
            <button className="bg-green-500 rounded-md px-3 py-2 text-sm">mark as completed</button>
            <button className="bg-red-500 rounded-md px-3 py-2 text-sm" >mark as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask
