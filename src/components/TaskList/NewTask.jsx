import { useContext } from "react";
import PriorityTab from "../Dashboard/priorityTab"
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({task, loggedInUserData}) => {
    
    const {userData, setUserData} = useContext(AuthContext);
    const employees = userData.employees;
    const employeeEmail = loggedInUserData.email;

  const acceptTask = ()=>{
    const updatedEmployees = [...employees];
    const currentEmployee = updatedEmployees.find(
      (u)=>u.email === employeeEmail
    );

    const currentTask = currentEmployee.tasks.find(
      (t)=>t.title === task.title && t.date === task.date
    );

    currentTask.active = true;
    currentTask.newTask = false;
    currentTask.completed = false;
    currentTask.failed = false;

    currentEmployee.taskCounts.newTask -= 1;
    currentEmployee.taskCounts.active += 1;

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
    <div  className="bg-[#243447] w-90 h-full rounded-lg shrink-0 py-4 px-6">
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
        <div className="mt-30 flex justify-center relative bottom-0">
            <button onClick={()=>{
              acceptTask();
            }} className="bg-blue-500 rounded-md px-3 py-2 w-[85%]">Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask
