import { useState } from "react"

const CreateTaskForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("submitted")
  }

  return (
    <div className="p-3 mt-5 rounded-md text-white w-full bg-[#1f1f1f] mx-auto">
      <form 
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className=" flex justify-between my-7">

        <div className="flex flex-col gap-10 w-1/2 items-center">
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Title</h1>
                <input 
                  value={title}
                  type="text" 
                  placeholder="title"
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
            </div>
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Date</h1>
                <input value={date}
                  type="date"
                  placeholder="date"
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
            </div>
            <div className="w-[70%]">
                <h1 className="text-gray-400">Assign To</h1>
                <input value={assignTo} 
                  type="text" 
                  placeholder="employee name" 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full" 
                />
            </div>
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Category</h1>
                <input 
                  value={category} 
                  type="text" 
                  placeholder="design, development, etc" 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full"
                />
             </div>
        </div>

        <div className="flex flex-col gap-10 w-1/2 justify-between items-center">
            <div className="w-[70%]">
                <h1 className="text-gray-400">Task Description</h1>
                <textarea 
                  value={description}
                  name="" 
                  cols="30" 
                  rows="10" 
                  placeholder="description" 
                  className="outline-none border px-3 py-2 border-gray-300 rounded-md mt-1 w-full">

                </textarea>
            </div>
            <button className="w-[70%] bg-gray-50 text-black font-medium text-2xl px-4 py-2 rounded-md">Create Task</button>
        </div>

      </form>
    </div>
  )
}

export default CreateTaskForm
