import Header from "../others/Header"
import CreateTaskForm from "./CreateTaskForm"
import AllActiveTask from "./AllActiveTask"


const AdminDashboard = ({setUser, setLoggedInUserData, loggedInUserData}) => {



  return (
    <div className="bg-[#1c1c1c] min-h-screen p-10 text-white">
      <Header setUser={setUser}  setLoggedInUserData={setLoggedInUserData} loggedInUserData={loggedInUserData}/>
      <CreateTaskForm/>
      <AllActiveTask/>
    </div>
  )
}

export default AdminDashboard
