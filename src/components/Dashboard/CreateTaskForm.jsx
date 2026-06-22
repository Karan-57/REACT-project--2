import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider";

const CreateTaskForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  // const [task, setTask] = useState({});
  const [foundEmployee, setFoundEmployee] = useState(true);

  const {userData,setUserData} = useContext(AuthContext);

  const validate = (e)=>{
    if(
      e.target[0].value.trim() == '' ||
      e.target[1].value.trim() == '' ||
      e.target[2].value.trim() == '' ||
      e.target[3].value.trim() == '' ||
      e.target[4].value.trim() == '' 
    ){
        return false;
    }else{
      return true;
    }
  };

  const createTask = (id)=>{
    const employees = [...userData.employees];
    const newTask = {
      title,
      description,
      date,
      priority,
      assignTo,
      active:false,
      newTask:true,
      completed: false,
      failed:false
    };

    // setTask(newTask);

    const assignToEmployee = employees.find(
      (u)=>u.id === id
    );
    
    if(assignToEmployee){
      assignToEmployee.tasks.push(newTask);

      assignToEmployee.taskCounts.newTask += 1;

      setUserData({
        ...userData,
        employees
      });

      localStorage.setItem('employees',JSON.stringify(employees));
    }else{
      setFoundEmployee(false);
      return;
    }
  };

  const submitHandler = (e)=>{
    setFoundEmployee(true);
    const id = Number(assignTo);

    e.preventDefault();

    if(!validate(e)){
        setIsInputValid(false);
        return;
    }

    createTask(id);
    
    setIsInputValid(true);
    setTitle('');
    setDescription('');
    setDate('');
    setPriority('');
    setAssignTo('');
  }

  return (
    <div className="p-3 mt-5 rounded-md text-white w-full bg-[#1f1f1f] mx-auto">
      <form 
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className=" flex justify-between my-7 ">

        <div className="flex flex-col gap-10 w-1/2 items-center">
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Title</h1>
                <input 
                  value={title}
                  onChange={(e)=>{
                    setTitle(e.target.value);
                  }}
                  type="text" 
                  placeholder="Title"
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
                
            </div>
            <div className="w-[70%]">
                <h1 id="dataInput" className="text-gray-400">Task Date</h1>
                <input 
                  value={date}
                  onChange={(e)=>{
                    setDate(e.target.value);
                  }}
                  type="date"
                  placeholder="Date"
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
            </div>
            <div className="w-[70%]">
                <h1 className="text-gray-400">Assign To</h1>
                <input 
                  value={assignTo}
                  onChange={(e)=>{
                    setAssignTo(e.target.value);
                  }} 
                  type="number"
                  placeholder="Id" 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
            </div>
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Priority</h1>
                <input 
                  value={priority}
                  onChange={(e)=>{
                    setPriority(e.target.value);
                  }} 
                  type="text" 
                  placeholder="High, medium or low " 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full"
                />
             </div>
        </div>

        <div className="flex flex-col gap-10 w-1/2 justify-between items-center">
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Description</h1>
                <textarea 
                  value={description}
                  onChange={(e)=>{
                    setDescription(e.target.value);
                  }}
                  name="" 
                  cols="30" 
                  rows="10" 
                  placeholder="Description" 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full">

                </textarea>
            </div>
            <button className="w-[70%] bg-gray-50 text-black font-medium text-2xl px-4 py-2 rounded-md">Create Task</button>
        </div>

      </form>
      <div className="h-5 w-full flex justify-center items-center my-2">
        {!isInputValid && (
          <p className="text-red-700  font-medium">
            Ensure no input is blank
          </p>
        )}
        {
          !foundEmployee && <p className="text-red-700  font-medium">
            Employee with id does not exists
          </p>
        }
      </div>
    </div>
  )
}

export default CreateTaskForm
