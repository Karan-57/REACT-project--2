
const ActiveTaskCard = ({employee}) => {
  const taskCount = employee.taskCounts;

  return (
    <div  className={`bg-transparent border-white border rounded-md w-full h-16 my-2 flex justify-between items-center px-8`}>
      <h2 className="text-sxl font-semibold w-1/5">{employee.name}</h2>
          <h4 className="text-lg w-1/5  text-blue-500">{taskCount.newTask}</h4>
          <h4 className="text-lg w-1/5 text-yellow-500">{taskCount.active}</h4>
          <h4 className="text-lg w-1/5 text-green-500">{taskCount.completed}</h4>
          <h4 className="text-lg w-1/5 text-red-500">{taskCount.failed}</h4>
    </div>
    
  )
}

export default ActiveTaskCard
