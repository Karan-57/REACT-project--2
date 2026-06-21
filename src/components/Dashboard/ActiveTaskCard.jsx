
const ActiveTaskCard = ({color}) => {
  return (
    <div  className={`${color} w-full h-16 my-2 flex justify-between items-center px-8`}>
      <h2 className="font-2xl font-semibold w-1/5">Employee</h2>
          <h4 className="font-xl w-1/5">New task</h4>
          <h4 className="font-xl w-1/5">Active task</h4>
          <h4 className="font-xl w-1/5">Completed task</h4>
          <h4 className="font-xl w-1/5">Failed task</h4>
    </div>
    
  )
}

export default ActiveTaskCard
