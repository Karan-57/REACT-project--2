import ActiveTaskCard from "./ActiveTaskCard"
import { useContext } from "react"
import {AuthContext}  from '../../context/AuthProvider'

const ActiveTask = () => {

  const authData = useContext(AuthContext);
  const employees = authData.employees;
  console.log(employees)

  return (
    <div>

      <div  className="bg-[#1f1f1f] px-6 py-2 h-85 flex flex-col">

        <div className="bg-blue-500 w-full h-16 my-2 flex justify-between items-center px-8">
          <h2 className="font-2xl font-semibold w-1/5 ">Employee</h2>
                <h4 className="font-xl w-1/5 ">New task</h4>
                <h4 className="font-xl w-1/5 ">Active task</h4>
                <h4 className="font-xl w-1/5 ">Completed task</h4>
                <h4 className="font-xl w-1/5 ">Failed task</h4>
        </div>

        <div id="activeTask" className="overflow-y-auto flex-1">
          {employees.map((employee, idx) => (
            <ActiveTaskCard
              key={idx}
              color="bg-purple-400"
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ActiveTask
