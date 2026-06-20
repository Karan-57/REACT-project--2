const TaskCard = ({color,type,value}) => {
  return (
    <div className={`px-4 py-4 ${color} w-[45%] mt-14 mx-5 rounded-md`}>
      <h1 className="text-3xl font-semibold">{value}</h1> 
      <h3 className="text-2xl font-medium">{type}</h3>
    </div>
  )
}

export default TaskCard
