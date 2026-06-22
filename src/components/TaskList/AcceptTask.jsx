import PriorityTab from "../Dashboard/priorityTab"

import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const AcceptTask = ({task,loggedInUserData}) => {
  
  const {userData, setUserData} = useContext(AuthContext);
  const employees = userData.employees;
  const employeeEmail = loggedInUserData.email;
  

  const markCompleted = ()=>{
    const updatedEmployees = [...employees];
    const currentEmployee = updatedEmployees.find(
      (u)=>u.email === employeeEmail
    );

    const currentTask = currentEmployee.tasks.find(
      (t)=>t.title === task.title && t.date === task.date
    );

    currentTask.active = false;
    currentTask.newTask = false;
    currentTask.completed = true;
    currentTask.failed = false;

    currentEmployee.taskCounts.active -= 1;
    currentEmployee.taskCounts.completed += 1;

    setUserData({
      ...userData,
      employees: updatedEmployees 
    });

    localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    );
  };

  const markFailed = ()=>{
    const updatedEmployees = [...employees];
    const currentEmployee = updatedEmployees.find(
      (u)=>u.email === employeeEmail
    );

    const currentTask = currentEmployee.tasks.find(
      (t)=>t.title === task.title && t.date === task.date
    );

    currentTask.active = false;
    currentTask.newTask = false;
    currentTask.completed = false;
    currentTask.failed = true;

    currentEmployee.taskCounts.active -= 1;
    currentEmployee.taskCounts.failed += 1;

    setUserData({
      ...userData,
      employees: updatedEmployees 
    });

    localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    );
  };


  return (
    <div  className="bg-blue-500 w-90 h-full rounded-lg shrink-0 py-4 px-6 ">
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
        <div className="mt-30 flex justify-between relative bottom-0 px-4">
            <button onClick={()=>{
              markCompleted();
            }} className="bg-green-500 rounded-md px-3 py-2 text-sm">mark as completed</button>
            <button onClick={()=>{
              markFailed();
            }} className="bg-red-500 rounded-md px-3 py-2 text-sm" >mark as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask
