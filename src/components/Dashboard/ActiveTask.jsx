import ActiveTaskCard from "./ActiveTaskCard"

const ActiveTask = () => {
  return (
    <div id="activeTask" className="h-56 bg-[#1f1f1f] px-6 py-2 mt-7 overflow-y-auto">
      <ActiveTaskCard color='bg-red-400'/>
      <ActiveTaskCard color='bg-blue-400'/>
      <ActiveTaskCard color='bg-yellow-400'/>
      <ActiveTaskCard color='bg-green-400'/>
      <ActiveTaskCard color='bg-purple-400'/>
    </div>
  )
}

export default ActiveTask
