import PriorityTab from "../Dashboard/priorityTab"
const FailedTask = ({task}) => {
    
  return (
    <div  className="bg-yellow-500 w-90 h-full rounded-lg shrink-0 py-4 px-6">
        <div className=" w-full flex justify-between">
            <PriorityTab priority={task.category}/>
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
            <button className="bg-red-500 rounded-md px-3 py-2 w-[85%]">Failed</button>
        </div>
    </div>
  )
}

export default FailedTask
