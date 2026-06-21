import ActiveTaskCard from "./ActiveTaskCard"
import { useContext } from "react"
import {AuthContext}  from '../../context/AuthProvider'

const ActiveTask = () => {

  const authData = useContext(AuthContext);
  const employees = authData.employees;

  return (
    <div>

      <div  className="bg-[#1f1f1f] px-6 py-2 mt-4 flex flex-col">

        <div className="bg-blue-500 rounded-md w-full h-16 my-2 flex justify-between items-center px-8">
          <h2 className="text-xl font-semibold w-1/5 ">Employee</h2>
                <h4 className="text-lg w-1/5 font-medium">New task</h4>
                <h4 className="text-lg w-1/5 font-medium">Active task</h4>
                <h4 className="text-lg w-1/5 font-medium">Completed task</h4>
                <h4 className="text-lg w-1/5 font-medium">Failed task</h4>
        </div>

        <div id="activeTask" className="">
          {employees.map((employee, idx) => (
            <ActiveTaskCard
              employee={employee}
              key={idx}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ActiveTask
