
const ActiveTaskCard = ({color}) => {
  return (
    <div  className={`${color} w-full h-16 my-2 flex justify-between items-center px-8`}>
      <h2 className="font-2xl font-semibold">User Name</h2>
      <h4 className="font-xl">Make backend logic</h4>
      <h5 className="font-xl font-medium">status</h5>
    </div>
    
  )
}

export default ActiveTaskCard
